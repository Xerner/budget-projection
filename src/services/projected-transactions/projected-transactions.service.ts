import { Injectable } from '@angular/core';
import { DateTime, Duration } from 'luxon';
import { Account } from 'src/models/Account';
import { DateFilterEntity } from 'src/models/DateFilterEntity';
import { Occurrence, OccurrenceToDuration } from 'src/models/Occurrences';
import { PlannedTransaction } from 'src/models/PlannedTransaction';
import { ProjectedTransaction } from 'src/models/ProjectedTransaction';
import { DateFilterService } from 'src/services/date-filters.service';
import { INode } from 'common/library/graphs/types/INode';
import { KahnSorter } from 'common/library/graphs/kahn-sorter';

@Injectable({ providedIn: 'root' })
export class ProjectedTransactionService {
  constructor(
    private dateFilterService: DateFilterService,
  ) { }

  getProjectedPlannedTransactions(plannedTransactions: PlannedTransaction[], dateFilters: DateFilterEntity<PlannedTransaction>[], startingDate: DateTime, endingDate: DateTime, sortOrder: number): ProjectedTransaction[] {
    var nextDate = startingDate;
    var dates: DateTime[] = [];
    while (nextDate < endingDate) {
      dates.push(nextDate);
      nextDate = nextDate.plus({ "days": 1 });
    }
    var transactions = this.sortByBundledIn(plannedTransactions)
      .filter(plannedTransaction => plannedTransaction.active)
      .flatMap(plannedTransaction => {
        return this.createProjectedTransactions(plannedTransaction, dateFilters, dates, null)
      })
    transactions.forEach(transaction => transaction.sortOrder = sortOrder++);
    return transactions;
  }

  sortByBundledIn(plannedTransactions: PlannedTransaction[]): PlannedTransaction[] {
    return KahnSorter
      .kahnSort(plannedTransactions.map<INode<PlannedTransaction>>(plannedTransaction => plannedTransaction.toNode(plannedTransactions)))
      .map(node => node.body);
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
    if (datesToCreateTransactionsOn.length == 0 && dates.length !== 0 && plannedTransaction.bundledIn == null) {
      console.error("Planned transaction must have at least one date filter or be bundled in with another transaction", plannedTransaction);
      throw new Error("Planned transaction must have at least one date filter or be bundled in with another transaction");
    }
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
