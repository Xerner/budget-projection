import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { DateFilterEntity } from 'models/DateFilter';

@Injectable({ providedIn: 'root' })
export class DateFilterService {
  filterDates<T>(dateFilters: DateFilterEntity<T>[], dates: DateTime[]): DateTime[] {
    return dateFilters
      .sort((a, b) => a.dateFilter.order - b.dateFilter.order)
      .flatMap(dateFilter => dates.filter(dateFilter.dateFilter.filter));
  }
}
