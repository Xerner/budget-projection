import { Injectable } from '@angular/core';
import { DateTime, Duration } from 'luxon';
import { Account } from 'models/Account';
import { DateFilterEntity } from 'models/DateFilter';
import { Occurrence, OccurrenceToDuration } from 'models/Occurrences';
import { PlannedTransaction } from 'models/PlannedTransaction';
import { ProjectedTransaction } from 'models/ProjectedTransaction';
import { DateFilterService } from './date-filters.service';

@Injectable({ providedIn: 'root' })
export class ProjectedTransactionService {
  constructor(
    private dateFilterService: DateFilterService,
  ) { }

  getProjectedPlannedTransactions(plannedTransactions: PlannedTransaction[], dateFilters: DateFilterEntity<PlannedTransaction>[], endingDate: DateTime, sortOrder: number): ProjectedTransaction[] {
    var startingDate = DateTime.now().startOf('day');
    var nextDate = startingDate;
    var dates: DateTime[] = [];
    while (nextDate < endingDate) {
      dates.push(nextDate);
      nextDate = nextDate.plus({ "days": 1 });
    }
    var transactions = plannedTransactions
    .filter(plannedTransaction => plannedTransaction.active)
    .filter(plannedTransaction => plannedTransaction.bundledIn == null)
    .flatMap(plannedTransaction => {
      return this.createProjectedTransactions(plannedTransaction, dateFilters, dates, null)
    })
    var bundledTransactions = plannedTransactions
      .filter(plannedTransaction => plannedTransaction.active)
      .filter(plannedTransaction => plannedTransaction.bundledIn != null)
      .flatMap(plannedTransaction => {
        var bundledTransactions = plannedTransactions.filter(transaction => transaction.bundledIn?.id == plannedTransaction.id);
        return this.createProjectedTransactions(plannedTransaction, dateFilters, dates, bundledTransactions);
      });
    transactions.forEach(transaction => transaction.sortOrder = sortOrder++);
    return transactions;
  }

  private createProjectedTransactions(plannedTransaction: PlannedTransaction, dateFilters: DateFilterEntity<PlannedTransaction>[], dates: DateTime[], bundledTransactions: PlannedTransaction[] | null): ProjectedTransaction[] {
    var interval: Duration | null = OccurrenceToDuration(plannedTransaction.occurrence as Occurrence);
    if (interval == null || plannedTransaction.occurrence == Occurrence.AdHoc) {
      if (plannedTransaction.startingDate == null) {
        throw new Error("Planned transaction must have a starting date if it is Ad-Hoc or not re-occurring.");
      }
      return [this.createProjectedTransaction(plannedTransaction, plannedTransaction.startingDate)];
    }
    var startingDate = plannedTransaction.startingDate ?? DateTime.now().startOf('day');
    var nextDate = startingDate;
    var dateFiltersForPlannedTransaction = dateFilters.filter(dateFilter => dateFilter.transaction.id == plannedTransaction.id);
    var intervalCountdown = interval!.days;
    var datesToCreateTransactionsOn: DateTime[] = this.dateFilterService.filterDates(dateFiltersForPlannedTransaction, dates);
    var projectedTransactions: ProjectedTransaction[] = [];
    datesToCreateTransactionsOn.forEach(date => {
      var dateDiff = Math.abs(date.diff(nextDate, 'days').days);
      intervalCountdown -= dateDiff;
      if (intervalCountdown <= 0) {
        nextDate = date;
        intervalCountdown = interval!.days;
        projectedTransactions.push(this.createProjectedTransaction(plannedTransaction, date));
      }
    });
    return projectedTransactions;
  }

  private createProjectedTransaction(plannedTransaction: PlannedTransaction, datetime: DateTime): ProjectedTransaction {
    return new ProjectedTransaction(
      datetime,
      0,
      plannedTransaction.description,
      plannedTransaction.category,
      plannedTransaction.amount,
      plannedTransaction.account,
      0, // calculated later when day-to-day balances are created
      plannedTransaction,
    );
  }
}
