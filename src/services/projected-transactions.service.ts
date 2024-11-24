import { Injectable } from '@angular/core';
import { STRINGS } from 'common/library';
import { DateTime } from 'luxon';
import { Account } from 'models/Account';
import { AirtablePlannedTransaction } from 'models/airtable/api';
import { Occurrence, OccurrenceToDuration } from 'models/interfaces/IOccurences';
import { ProjectedTransaction } from 'models/ProjectedTransaction';

@Injectable({ providedIn: 'root' })
export class ProjectedTransactionService {
  getProjectedPlannedTransactions(plannedTransactions: AirtablePlannedTransaction[], endingDate: DateTime, sortOrder: number, accounts: Account[]): ProjectedTransaction[] {
    return plannedTransactions
      .filter(plannedTransaction => plannedTransaction.Active)
      .flatMap(plannedTransaction => {
        return this.createProjectedTransactions(plannedTransaction, endingDate, sortOrder, accounts)
      });
  }

  private createProjectedTransactions(plannedTransaction: AirtablePlannedTransaction, endingDate: DateTime, sortOrder: number, accounts: Account[]): ProjectedTransaction[] {
    if (plannedTransaction.Occurrence == Occurrence.AdHoc) {
      return [this.createProjectedTransaction(plannedTransaction, endingDate, sortOrder, accounts)];
    }
    var duration = OccurrenceToDuration(plannedTransaction.Occurrence as Occurrence);
    if (duration == null) {
      return [];
    }
    var nextDate = DateTime.now().startOf('day');
    var transactions: ProjectedTransaction[] = [];
    var projectedTransaction: ProjectedTransaction;
    while (nextDate < endingDate) {
      projectedTransaction = this.createProjectedTransaction(plannedTransaction, nextDate, sortOrder, accounts);
      transactions.push(projectedTransaction);
      nextDate = nextDate.plus(duration);
    }
    return transactions;
  }

  private createProjectedTransaction(plannedTransaction: AirtablePlannedTransaction, datetime: DateTime, sortOrder: number, accounts: Account[]): ProjectedTransaction {
    sortOrder++;
    var account = accounts.find(account => account.doesNameRepresent(plannedTransaction.Account[0])) ?? Account.UnknownAccount();
    return new ProjectedTransaction(
      datetime,
      sortOrder,
      plannedTransaction.Description,
      plannedTransaction.Category,
      plannedTransaction.Amount,
      account,
      0,
      plannedTransaction,
    );
  }
}
