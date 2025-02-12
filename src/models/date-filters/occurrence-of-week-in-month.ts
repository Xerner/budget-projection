import { DateTime } from "luxon";
import { DateFilter } from "./abstract-date-filter";

export const WEEKDAYS = 7;

export class OccurrenceOfWeekInMonth extends DateFilter<number> {
  override convert(value: string): number {
    return parseInt(value);
  }
  override filter(dates: DateTime[]): DateTime[] {
    return dates.filter(date => Math.floor(date.day / WEEKDAYS) === this.filterValue);
  }
}
