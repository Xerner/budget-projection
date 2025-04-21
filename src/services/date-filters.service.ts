import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { DayOfWeekFilter } from 'src/models/date-filters/day-of-week';
import { DateFilterEntity } from 'src/models/DateFilterEntity';
import { DateFilter } from 'src/models/date-filters/abstract-date-filter';
import { OccurrenceOfWeekInMonth } from 'src/models/date-filters/occurrence-of-week-in-month';
import { OccurrenceOfDate } from 'src/models/date-filters/occurrence-of-date-in-week';

type DateFilterConstructor = new (...args: ConstructorParameters<typeof DateFilter<any>>) => DateFilter<any>;

@Injectable({ providedIn: 'root' })
export class DateFilterService {
  filterNameToClass: Record<string, DateFilterConstructor> = {
    'Occurrence Of Date': OccurrenceOfDate,
    'Occurrence Of Week In Month': OccurrenceOfWeekInMonth,
    'Day of Week': DayOfWeekFilter,
  };

  filterDates<T>(dateFilters: DateFilterEntity<T>[], dates: DateTime[]): DateTime[] {
    return dateFilters
      .sort((a, b) => a.dateFilter.order - b.dateFilter.order)
      .flatMap(dateFilterEntity => dateFilterEntity.dateFilter.filter.bind(dateFilterEntity.dateFilter)(dates));
  }
}
