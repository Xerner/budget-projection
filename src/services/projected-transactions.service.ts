import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Account } from 'models/Account';
import { AirtablePlannedTransaction } from 'models/airtable/api';
import { Occurrence, OccurrenceToDuration } from 'models/Occurences';
import { ProjectedTransaction } from 'models/ProjectedTransaction';

@Injectable({ providedIn: 'root' })
export class ProjectedTransactionService {
  getProjectedPlannedTransactions(plannedTransactions: AirtablePlannedTransaction[], endingDate: DateTime, sortOrder: number, accounts: Account[]): ProjectedTransaction[] {
    var transactions = plannedTransactions
      .filter(plannedTransaction => plannedTransaction.fields.Active)
      .flatMap(plannedTransaction => {
        return this.createProjectedTransactions(plannedTransaction, endingDate, accounts)
      })
      .sort((a, b) => a.date.toMillis() - b.date.toMillis());
    transactions.forEach(transaction => transaction.sortOrder = sortOrder++);
    return transactions;
  }

  private createProjectedTransactions(plannedTransaction: AirtablePlannedTransaction, endingDate: DateTime, accounts: Account[]): ProjectedTransaction[] {
    if (plannedTransaction.fields.Occurrence == Occurrence.AdHoc) {
      return [this.createProjectedTransaction(plannedTransaction, endingDate, accounts)];
    }
    var duration = OccurrenceToDuration(plannedTransaction.fields.Occurrence as Occurrence);
    if (duration == null) {
      return [];
    }
    var nextDate = DateTime.now().startOf('day');
    var projectedTransactions: ProjectedTransaction[] = [];
    var projectedTransaction: ProjectedTransaction;
    while (nextDate < endingDate) {
      projectedTransaction = this.createProjectedTransaction(plannedTransaction, nextDate, accounts);
      projectedTransactions.push(projectedTransaction);
      nextDate = nextDate.plus(duration);
    }
    return projectedTransactions;
  }

  private createProjectedTransaction(plannedTransaction: AirtablePlannedTransaction, datetime: DateTime, accounts: Account[]): ProjectedTransaction {
    var account = accounts.find(account => account.doesNameRepresent(plannedTransaction.fields.Account[0])) ?? Account.UnknownAccount();
    return new ProjectedTransaction(
      datetime,
      0,
      plannedTransaction.fields.Description,
      plannedTransaction.fields.Category,
      plannedTransaction.fields.Amount,
      account,
      0, // calculated later when day-to-day balances are created
      plannedTransaction,
    );
  }
}
