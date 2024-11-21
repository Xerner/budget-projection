import { computed, Injectable, signal } from '@angular/core';
import { InputsService } from './inputs.service';
import { DateTime } from 'luxon';
import { AirtableService } from './airtable.service';
import { Occurence, OccurenceToDuration } from '../models/IOccurences';
import { IBalanceOnDate, IPlannedTransaction, IProjectedTransaction, ITransaction, ITransactionWithCalculations } from '../models/Transactions';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  startingDate = signal<DateTime | null>(null);
  endingDate = signal<DateTime | null>(null);
  actualBalances = computed<IBalanceOnDate[]>(this.getActualBalancesOnDates.bind(this));
  projectedBalances = computed<IBalanceOnDate[]>(this.getProjectedRunningBalancesOnDates.bind(this));
  allBalances = computed<IBalanceOnDate[]>(() => {
    return this.actualBalances().concat(this.projectedBalances());
  });
  constructor(
    private inputsService: InputsService,
    private airtableService: AirtableService,
  ) {
    this.inputsService.apiForm.controls.startingDate.valueChanges.subscribe(date => {
      this.startingDate.set(date);
    });
    this.inputsService.apiForm.controls.endingDate.valueChanges.subscribe(date => {
      this.endingDate.set(date);
    });
  }

  private getActualBalancesOnDates(): IBalanceOnDate[] {
    var startingDate = this.startingDate();
    var endingDate = this.endingDate();
    var transactions = this.airtableService.transactions()
      .filter(transaction => transaction.date >= startingDate! && transaction.date <= endingDate!)
    if (transactions === null || startingDate === null || endingDate === null) {
      return [];
    }
    return this.getBalancesOnDates(transactions);
  }

  private getProjectedRunningBalancesOnDates() {
    var startingDate = this.startingDate();
    var endingDate = this.endingDate();
    var plannedTransactions = this.airtableService.plannedTransactions();
    if (plannedTransactions === null || startingDate === null || endingDate === null) {
      return [];
    }
    var actualBalances = this.actualBalances();
    var startingBalance = actualBalances.length > 0 ? actualBalances[actualBalances.length - 1] : null;
    var sortOrder = startingBalance?.transactions[startingBalance.transactions.length - 1].sortOrder ?? 0;
    var projectedPlannedTransactions = this.getProjectedPlannedTransactions(plannedTransactions, endingDate, sortOrder);
    return this.getBalancesOnDates(projectedPlannedTransactions, startingBalance);
  }

  private getTransactionsOnDateTuples<T extends ITransaction>(transactions: T[]): [DateTime, T[]][] {
    return transactions.reduce((tuples, current) => {
      var date = current.date;
      var transactionsOnDateTuple: [DateTime, T[]] | undefined = tuples.find(([_date, _]) => _date.equals(date));
      if (transactionsOnDateTuple === undefined) {
        transactionsOnDateTuple = [date, []];
        tuples.push(transactionsOnDateTuple);
      }
      transactionsOnDateTuple[1].push(current);
      return tuples;
    }, [] as [DateTime, T[]][]);
  }

  private getBalancesOnDates(transactions: ITransaction[], startingBalance: IBalanceOnDate | null = null): IBalanceOnDate[] {
    if (transactions.length == 0) {
      return [];
    }
    transactions.sort((transaction1, transaction2) => transaction1.date.toMillis() - transaction2.date.toMillis());
    var transactionsWithCalculations = transactions.map<ITransactionWithCalculations>(transaction => {
      return {
        ...transaction,
        indexOnDay: 0,
        calculatedBalance: 0,
      };
    });
    var transactionsOnDateTuples = this.getTransactionsOnDateTuples(transactionsWithCalculations);
    var balanceOnDate: IBalanceOnDate | null = null;
    var balanceOnDates = transactionsOnDateTuples
      .map<IBalanceOnDate>(transactionsOnDateTuple => {
        var date = transactionsOnDateTuple[0];
        var transactionsOnDate = transactionsOnDateTuple[1];
        startingBalance = balanceOnDate ?? startingBalance;
        balanceOnDate = this.createBalanceOnDate(startingBalance, date, transactionsOnDate);
        return balanceOnDate
      });
    return balanceOnDates;
  }

  private calculateNewBalance(current: ITransactionWithCalculations, previous?: ITransactionWithCalculations): number {
    if (previous === undefined) {
      current.calculatedBalance = current.runningBalance ?? 0;
      return current.calculatedBalance;
    }
    current.calculatedBalance = previous.calculatedBalance + current.amount;
    return current.calculatedBalance;
  }

  private createBalanceOnDate(previousBalance: IBalanceOnDate | null, date: DateTime, transactions: ITransactionWithCalculations[]): IBalanceOnDate {
    var previousBalancesBalance: number;
    if (previousBalance === null) {
      var firstTransactionsRunningBalance = transactions.length === 0 ? 0 : transactions[0].runningBalance ?? 0;
      var firstTransactionsAmount = transactions.length === 0 ? 0 : transactions[0].amount;
      previousBalancesBalance = firstTransactionsRunningBalance - firstTransactionsAmount;
    } else {
      var previousBalancesBalance = previousBalance.balance;
    }
    var isProjected = date > DateTime.now().startOf('day');
    if (transactions.length === 0) {
      return {
        date: date,
        balance: previousBalancesBalance,
        previousBalance: previousBalance,
        transactions: [],
        isProjected: isProjected,
      };
    }
    transactions.sort((transaction1, transaction2) => transaction1.account.localeCompare(transaction2.account));
    var previousTransaction = previousBalance?.transactions[previousBalance.transactions.length - 1];
    transactions.forEach((transaction, i) => {
      transaction.indexOnDay = i;
      this.calculateNewBalance(transaction, previousTransaction);
      previousTransaction = transaction;
    });
    var balance = transactions.reduce((accumulator, transaction) => accumulator += transaction.amount, previousBalancesBalance);
    return {
      date: date,
      balance: balance,
      previousBalance: previousBalance,
      transactions: transactions,
      isProjected: isProjected,
    };
  }

  private getProjectedPlannedTransactions(plannedTransactions: IPlannedTransaction[], endingDate: DateTime, sortOrder: number): IProjectedTransaction[] {
    return plannedTransactions
      .filter(plannedTransaction => plannedTransaction.active)
      .flatMap(plannedTransaction => {
        return this.createProjectedTransactions(plannedTransaction, endingDate, sortOrder)
      });
  }

  private createProjectedTransactions(plannedTransaction: IPlannedTransaction, endingDate: DateTime, sortOrder: number): IProjectedTransaction[] {
    if (plannedTransaction.occurrence == Occurence.AdHoc) {
      return [this.createProjectedTransaction(plannedTransaction, endingDate, sortOrder)];
    }
    var duration = OccurenceToDuration(plannedTransaction.occurrence);
    if (duration == null) {
      return [];
    }
    var nextDate = DateTime.now().startOf('day');
    var transactions: IProjectedTransaction[] = []
    while (nextDate < endingDate) {
      transactions.push(this.createProjectedTransaction(plannedTransaction, nextDate, sortOrder));
      nextDate = nextDate.plus(duration);
    }
    return transactions;
  }

  private createProjectedTransaction(plannedTransaction: IPlannedTransaction, datetime: DateTime, sortOrder: number): IProjectedTransaction {
    return {
      id: "",
      category: plannedTransaction.category,
      description: plannedTransaction.description,
      account: plannedTransaction.account,
      date: datetime,
      sortOrder: sortOrder,
      amount: plannedTransaction.amount,
      plannedTransaction: plannedTransaction,
    };
  }
}
