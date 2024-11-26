import { computed, Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { BalanceOnDate } from 'models/interfaces/IBalance';
import { ProjectedTransaction } from 'models/ProjectedTransaction';
import { Transaction } from 'models/Transactions';
import { ProjectedTransactionService } from './projected-transactions.service';
import { InputsService } from './inputs.service';
import { TransactionService } from './transactions.service';

@Injectable({ providedIn: 'root' })
export class BalancesService {
  actualBalances = computed<BalanceOnDate[]>(() => {
    return this.getActualBalancesOnDates(
      this.inputsService.startingDate(),
      this.inputsService.endingDate(),
      this.transactionService.getActualTransactions()
    );
  });
  projectedBalances = computed<BalanceOnDate[]>(() => {
    var startingBalance = this.actualBalances().length > 0 ? this.actualBalances()[this.actualBalances().length - 1] : null;
    var transactions = this.projectedTransactionService.projectedTransactions();
    if (transactions === null || startingBalance === null) {
      return [];
    }
    return this.getProjectedRunningBalancesOnDates(
      this.inputsService.startingDate(),
      this.inputsService.endingDate(),
      transactions,
      startingBalance,
    );
  });
  allBalances = computed<BalanceOnDate[]>(() => {
    return this.actualBalances().concat(this.projectedBalances());
  });
  filteredBalances = computed<BalanceOnDate[]>(() => {
    var startingDate = this.inputsService.startingDate();
    var endingDate = this.inputsService.endingDate();
    if (startingDate === null || endingDate === null) {
      return [];
    }
    return this.allBalances().filter(balance => {
      return balance.date >= startingDate! && balance.date <= endingDate!;
    });
  });

  constructor(
    private inputsService: InputsService,
    private transactionService: TransactionService,
    private projectedTransactionService: ProjectedTransactionService,
  ) { }

  getActualBalancesOnDates(startingDate: DateTime | null, endingDate: DateTime | null, transactions: Transaction[]): BalanceOnDate[] {
    transactions = transactions.filter(transaction => transaction.date >= startingDate! && transaction.date <= endingDate!)
    if (transactions === null || startingDate === null || endingDate === null) {
      return [];
    }
    return this.getBalancesOnDates(transactions);
  }

  getProjectedRunningBalancesOnDates(startingDate: DateTime | null, endingDate: DateTime | null, projectedTransactions: ProjectedTransaction[], startingBalance: BalanceOnDate) {
    if (projectedTransactions === null || startingDate === null || endingDate === null) {
      return [];
    }
    return this.getBalancesOnDates(projectedTransactions, startingBalance);
  }

  private getBalancesOnDates(transactions: Transaction[], startingBalance: BalanceOnDate | null = null): BalanceOnDate[] {
    if (transactions.length == 0) {
      return [];
    }
    transactions.sort((transaction1, transaction2) => transaction1.date.toMillis() - transaction2.date.toMillis());
    var transactionsOnDateTuples = this.getTransactionsOnDateTuples(transactions);
    var balanceOnDate: BalanceOnDate | null = null;
    var balanceOnDates = transactionsOnDateTuples
      .map<BalanceOnDate>(transactionsOnDateTuple => {
        var date = transactionsOnDateTuple[0];
        var transactionsOnDate = transactionsOnDateTuple[1];
        startingBalance = balanceOnDate ?? startingBalance;
        balanceOnDate = this.createBalanceOnDate(startingBalance, date, transactionsOnDate);
        return balanceOnDate
      });
    return balanceOnDates;
  }

  private createBalanceOnDate(previousBalance: BalanceOnDate | null, date: DateTime, transactions: Transaction[]): BalanceOnDate {
    var startingBalance: number;
    if (previousBalance === null) {
      var firstTransaction = transactions.length === 0 ? null : transactions[0];
      startingBalance = firstTransaction?.startingBalance ?? 0;
    } else {
      var startingBalance = previousBalance.balance;
    }
    if (transactions.length === 0) {
      return new BalanceOnDate(
        date,
        startingBalance,
        [],
        previousBalance,
      );
    };
    var previousTransaction = previousBalance?.transactions[previousBalance.transactions.length - 1];
    transactions.forEach((transaction, i) => {
      transaction.indexOnDay = i;
      transaction.startingBalance = previousTransaction?.calculatedBalance() ?? startingBalance;
      previousTransaction = transaction;
    });
    var balance = transactions.reduce((accumulator, transaction) => accumulator += transaction.getAmount(), startingBalance);
    return new BalanceOnDate(
      date,
      balance,
      transactions,
      previousBalance,
    );
  }

  private getTransactionsOnDateTuples<T extends Transaction>(transactions: T[]): [DateTime, T[]][] {
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
}
