import { computed, Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { BalanceOnDate } from 'models/Balance';
import { Transaction } from 'models/Transactions';
import { InputsService } from './inputs.service';
import { TransactionService } from './transactions.service';
import { ProjectedTransaction } from 'models/ProjectedTransaction';

@Injectable({ providedIn: 'root' })
export class BalancesService {
  allBalances = computed<BalanceOnDate[]>(() => {
    var allBalances = this.balances().concat(this.projectedBalances());
    return allBalances;
  });
  balances = computed<BalanceOnDate[]>(() => {
    var startingDate = this.inputsService.startingDate();
    if (startingDate === null) {
      return [];
    }
    return this.getBalancesOnDates(
      startingDate,
      DateTime.now().startOf("day"),
      this.transactionService.transactions().filter(transaction => !(transaction instanceof ProjectedTransaction))
    );
  });
  projectedBalances = computed<BalanceOnDate[]>(() => {
    var endingDate = this.inputsService.endingDate();
    var actualBalances = this.balances();
    if (actualBalances.length === 0 || endingDate === null) {
      return [];
    }
    var previousBalance = actualBalances[actualBalances.length - 1];
    var balances = this.getBalancesOnDates(
      DateTime.now().minus({ days: 1 }).startOf("day"),
      endingDate,
      this.transactionService.transactions().filter(transaction => transaction instanceof ProjectedTransaction),
      previousBalance
    );
    return balances;
  });

  constructor(
    private inputsService: InputsService,
    private transactionService: TransactionService,
  ) { }

  getBalancesOnDates(startingDate: DateTime | null, endingDate: DateTime | null, transactions: Transaction[], previousBalance: BalanceOnDate | null = null): BalanceOnDate[] {
    if (transactions.length == 0 || startingDate === null || endingDate === null) {
      return [];
    }
    var dates = this.getDatesBetween(startingDate, endingDate);
    var balanceOnDate: BalanceOnDate | null = previousBalance;
    var balancesOnDates = dates.map<BalanceOnDate>(date => {
      balanceOnDate = this.createBalanceOnDate(date, transactions, balanceOnDate);
      return balanceOnDate
    });
    return balancesOnDates;
  }

  private getDatesBetween(startingDate: DateTime, endingDate: DateTime): DateTime[] {
    var dates = [];
    for (var date = startingDate; date <= endingDate; date = date.plus({ days: 1 })) {
      dates.push(date);
    }
    return dates;
  }

  private createBalanceOnDate(date: DateTime, transactions: Transaction[], previousBalance: BalanceOnDate | null): BalanceOnDate {
    if (previousBalance === null) {
      var previousTransactions = this.findAllPreviousTransactionsForEachAccountBeforeDate(transactions, date);
      var startingBalance = previousTransactions.reduce((accumulator, transaction) => accumulator += transaction.startingBalance, 0);
    } else {
      var startingBalance = previousBalance.balance;
    }
    var transactionsOnDay = transactions
      .filter(transaction => transaction.date.diff(date, 'days').days === 0)
      .map(transaction => transaction.clone());
    if (transactionsOnDay.length === 0) {
      return new BalanceOnDate(
        date,
        startingBalance,
        [],
      );
    };
    var previousTransaction: Transaction | null = null;
    transactionsOnDay.forEach((transaction, i) => {
      transaction.indexOnDay = i;
      transaction.startingBalance = previousTransaction?.calculatedBalance() ?? startingBalance;
      previousTransaction = transaction;
    });
    var balance = transactionsOnDay.reduce((accumulator, transaction) => accumulator += transaction.getAmount(), startingBalance);
    return new BalanceOnDate(
      date,
      balance,
      transactionsOnDay,
    );
  }

  private findAllPreviousTransactionsForEachAccountBeforeDate(transactions: Transaction[], date: DateTime): Transaction[] {
    var accountsFound = new Set<string>();
    var previousTransactionsForEachAccount = [];
    for (var i = transactions.length - 1; i >= 0; i--) {
      var transaction = transactions[i];
      if (transaction.date >= date || accountsFound.has(transaction.account.name)) {
        continue;
      }
      accountsFound.add(transaction.account.name);
      previousTransactionsForEachAccount.push(transaction);
    }
    return previousTransactionsForEachAccount;
  }
}
