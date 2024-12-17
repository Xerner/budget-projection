export enum DateFilterType {
  /** Occurs on a specific day */
  DayOfWeek = "Day of Week",
  /** Occurs on a specific index of week in the month */
  OccurrenceOfWeek = "Occurrence of Week",
  /** Occurs on a specific index of day in a general range of dates */
  OccurrenceOfDate = "Occurrence of Date",
}

// TODO: need to map DateFilterType to function that will apply the filter

export interface DateFilter<T> {
  type: DateFilterType;
  value: T;
}
