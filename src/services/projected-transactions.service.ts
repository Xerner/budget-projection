import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Occurrence, OccurrenceToDuration } from 'models/interfaces/IOccurences';
import { IPlannedTransaction } from 'models/interfaces/IPlannedTransactions';
import { ProjectedTransaction } from 'models/Transactions';

@Injectable({ providedIn: 'root' })
export class ProjectedTransactionService {
  getProjectedPlannedTransactions(plannedTransactions: IPlannedTransaction[], endingDate: DateTime, sortOrder: number): ProjectedTransaction[] {
    return plannedTransactions
      .filter(plannedTransaction => plannedTransaction.active)
      .flatMap(plannedTransaction => {
        return this.createProjectedTransactions(plannedTransaction, endingDate, sortOrder)
      });
  }

  private createProjectedTransactions(plannedTransaction: IPlannedTransaction, endingDate: DateTime, sortOrder: number): ProjectedTransaction[] {
    if (plannedTransaction.occurrence == Occurrence.AdHoc) {
      return [this.createProjectedTransaction(plannedTransaction, endingDate, sortOrder)];
    }
    var duration = OccurrenceToDuration(plannedTransaction.occurrence);
    if (duration == null) {
      return [];
    }
    var nextDate = DateTime.now().startOf('day');
    var transactions: ProjectedTransaction[] = [];
    var projectedTransaction: ProjectedTransaction;
    while (nextDate < endingDate) {
      projectedTransaction = this.createProjectedTransaction(plannedTransaction, nextDate, sortOrder);
      transactions.push(projectedTransaction);
      nextDate = nextDate.plus(duration);
    }
    return transactions;
  }

  private createProjectedTransaction(plannedTransaction: IPlannedTransaction, datetime: DateTime, sortOrder: number): ProjectedTransaction {
    sortOrder++;
    return new ProjectedTransaction(
      datetime,
      sortOrder,
      plannedTransaction.description,
      plannedTransaction.category,
      plannedTransaction.amount,
      0,
      plannedTransaction,
    );
  }
}
