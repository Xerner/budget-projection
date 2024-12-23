import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { AirtablePlannedTransactionDateFilter } from 'models/airtable/api/PlannedTransactionDateFilters';
import { DayOfWeekFilter } from 'models/date-filters/day-of-week-filter';
import { PlannedTransactionDateFilter } from 'models/DateFilter';
import { PlannedTransaction } from 'models/PlannedTransaction';

@Injectable({ providedIn: 'root' })
export class DateFilterService {
  filterDates(dateFilters: PlannedTransactionDateFilter[], dates: DateTime[]): DateTime[] {
    return dateFilters
      .sort((a, b) => a.dateFilter.order - b.dateFilter.order)
      .flatMap(dateFilter => dates.filter(dateFilter.dateFilter.filter));
  }

  getPlannedTransactionDateFilters(dateFilters: AirtablePlannedTransactionDateFilter[], plannedTransactions: PlannedTransaction[]): Transaction[] {
      // sort by date and then by custom sort order because banks are too stupid to include transaction times
      return dateFilters.map<PlannedTransactionDateFilter>(dateFilter => {
        var plannedTransaction = plannedTransactions.find(_plannedTransaction => _plannedTransaction.id === dateFilter.fields.Transaction[0]);
        if (!plannedTransaction) {
          console.error('Planned Transaction in date filter not found', dateFilter);
          throw new Error('Planned Transaction in date filter not found');
        }
        return new PlannedTransactionDateFilter(
          plannedTransaction,
          new DayOfWeekFilter(dateFilter.fields["Order"], dateFilter.fields["Input"]),
        );
      });
    }
}
