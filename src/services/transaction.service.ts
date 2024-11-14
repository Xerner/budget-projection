import { computed, Injectable, signal } from '@angular/core';
import { InputsService } from './inputs.service';
import { DateTime } from 'luxon';
import { AirtableService } from './airtable.service';
import { Occurence, OccurenceToDuration } from '../models/IOccurences';
import { IBalance, IPlannedTransaction, IProjectedTransaction, ITransaction } from '../models/Transactions';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  startingBalance = signal<number | null>(0);
  startingDate = signal<DateTime | null>(DateTime.now());
  endingDate = signal<DateTime | null>(DateTime.now());
  balances = computed<IBalance[]>(this.getRunningBalancesOnDates.bind(this));
  projectedBalances = computed<IBalance[]>(this.getProjectedRunningBalancesOnDates.bind(this));

  constructor(
    private inputsService: InputsService,
    private airtableService: AirtableService,
  ) {
    this.inputsService.dashboardForm.controls.startingBalance.valueChanges.subscribe(value => {
      this.startingBalance.set(value);
    });
    this.inputsService.dashboardForm.controls.startingDate.valueChanges.subscribe(date => {
      this.startingDate.set(date);
    });
    this.inputsService.dashboardForm.controls.endingDate.valueChanges.subscribe(date => {
      this.endingDate.set(date);
    });
  }

  private getRunningBalancesOnDates() {
    var startingDate = this.startingDate();
    var endingDate = this.endingDate();
    var startingBalance = this.startingBalance();
    var transactions = this.airtableService.transactions().filter(transaction => transaction.date >= startingDate! && transaction.date <= endingDate!);
    if (transactions === null || startingDate === null || endingDate === null || startingBalance === null) {
      return [];
    }

    var runningBalance = startingBalance;
    var transactionsOnDates = this.getTransactionsOnDates(transactions);
    var runningBalanceTransactions = Object.keys(transactionsOnDates)
      .map<IBalance>(justDate => {
        var transactions = transactionsOnDates.get(justDate);
        return this.createBalanceOnDate(runningBalance, justDate, transactions);
      });
    return runningBalanceTransactions;
  }

  private getProjectedRunningBalancesOnDates() {
    var startingDate = this.startingDate();
    var endingDate = this.endingDate();
    var startingBalance = this.startingBalance();
    var plannedTransactions = this.airtableService.plannedTransactions();
    if (plannedTransactions === null || startingDate === null || endingDate === null || startingBalance === null) {
      return [];
    }
    var projectedPlannedTransactions = this.getProjectedPlannedTransactions(plannedTransactions, endingDate)
    var runningBalance = startingBalance;
    var transactionsOnDates = this.getTransactionsOnDates(projectedPlannedTransactions);
    var runningBalanceTransactions = Object.keys(transactionsOnDates)
      .map<IBalance>(justDate => {
        var transactions = transactionsOnDates.get(justDate);
        return this.createBalanceOnDate(runningBalance, justDate, transactions);
      });
    return runningBalanceTransactions;
  }

  private getTransactionsOnDates(transactions: ITransaction[]): Map<string, ITransaction[]> {
    return transactions.reduce((accumulator, current) => {
      var date = current.date.startOf('day').toISODate()!;
      if (!accumulator.has(date)) {
        accumulator.set(date, []);
      }
      accumulator.get(date)?.push(current);
      return accumulator;
    }, new Map<string, ITransaction[]>());
  }

  private createBalanceOnDate(startingBalance: number, date: string, transactions: ITransaction[] | undefined): IBalance {
    if (transactions === undefined) {
      return {
        date: DateTime.fromISO(date),
        balance: startingBalance,
        transactions: [],
      };
    }
    startingBalance = transactions.reduce((accumulator, transaction) => accumulator += transaction.amount, startingBalance);
    return {
      date: DateTime.fromISO(date),
      balance: startingBalance,
      transactions: transactions,
    };
  }

  private getProjectedPlannedTransactions(plannedTransactions: IPlannedTransaction[], endingDate: DateTime): IProjectedTransaction[] {
    return plannedTransactions
      .filter(plannedTransaction => plannedTransaction.active)
      .flatMap(plannedTransaction => this.createProjectedTransactions(plannedTransaction, endingDate));
  }

  private createProjectedTransactions(plannedTransaction: IPlannedTransaction, endingDate: DateTime): IProjectedTransaction[] {
    if (plannedTransaction.occurrence == Occurence.AdHoc) {
      return [this.createProjectedTransaction(plannedTransaction, endingDate)];
    }
    var duration = OccurenceToDuration(plannedTransaction.occurrence);
    var nextDate = endingDate.startOf('day').plus(duration);
    var transactions: IProjectedTransaction[] = []
    while (nextDate < endingDate) {
      transactions.push(this.createProjectedTransaction(plannedTransaction, nextDate));
      nextDate = nextDate.plus(duration);
    }
    return transactions;
  }

  private createProjectedTransaction(plannedTransaction: IPlannedTransaction, datetime: DateTime): IProjectedTransaction {
    return {
      id: "",
      category: plannedTransaction.category,
      description: plannedTransaction.description,
      account: plannedTransaction.account,
      date: datetime,
      amount: plannedTransaction.amount,
      runningBalance: 0,
      plannedTransaction: plannedTransaction,
    };
  }
}
