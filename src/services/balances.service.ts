import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { IBalanceOnDate } from 'models/interfaces/IBalance';
import { ProjectedTransaction, Transaction } from 'models/Transactions';

@Injectable({ providedIn: 'root' })
export class BalancesService {
  getActualBalancesOnDates(startingDate: DateTime | null, endingDate: DateTime | null, transactions: Transaction[]): IBalanceOnDate[] {
    transactions = transactions.filter(transaction => transaction.date >= startingDate! && transaction.date <= endingDate!)
    if (transactions === null || startingDate === null || endingDate === null) {
      return [];
    }
    return this.getBalancesOnDates(transactions);
  }

  getProjectedRunningBalancesOnDates(startingDate: DateTime | null, endingDate: DateTime | null, projectedTransactions: ProjectedTransaction[], startingBalance: IBalanceOnDate) {
    if (projectedTransactions === null || startingDate === null || endingDate === null) {
      return [];
    }
    return this.getBalancesOnDates(projectedTransactions, startingBalance);
  }

  private getBalancesOnDates(transactions: Transaction[], startingBalance: IBalanceOnDate | null = null): IBalanceOnDate[] {
    if (transactions.length == 0) {
      return [];
    }
    transactions.sort((transaction1, transaction2) => transaction1.date.toMillis() - transaction2.date.toMillis());
    var transactionsOnDateTuples = this.getTransactionsOnDateTuples(transactions);
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

  private createBalanceOnDate(previousBalance: IBalanceOnDate | null, date: DateTime, transactions: Transaction[]): IBalanceOnDate {
    var startingBalance: number;
    if (previousBalance === null) {
      var firstTransaction = transactions.length === 0 ? null : transactions[0];
      startingBalance = firstTransaction?.startingBalance ?? 0;
    } else {
      var startingBalance = previousBalance.balance;
    }
    var isProjected = date > DateTime.now().startOf('day');
    if (transactions.length === 0) {
      return {
        date: date,
        balance: startingBalance,
        previousBalance: previousBalance,
        transactions: [],
        isProjected: isProjected,
      };
    };
    var previousTransaction = previousBalance?.transactions[previousBalance.transactions.length - 1];
    transactions.forEach((transaction, i) => {
      transaction.indexOnDay = i;
      transaction.startingBalance = previousTransaction?.calculatedBalance() ?? startingBalance;
      previousTransaction = transaction;
    });
    var balance = transactions.reduce((accumulator, transaction) => accumulator += transaction.getAmount(), startingBalance);
    return {
      date: date,
      balance: balance,
      previousBalance: previousBalance,
      transactions: transactions,
      isProjected: isProjected,
    };
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
