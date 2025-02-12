import { DateTime } from "luxon";
import { DateFilter } from "./abstract-date-filter";

export class OccurrenceOfDate extends DateFilter<number> {
  override convert(value: string): number {
    return parseInt(value);
  }
  override filter(dates: DateTime[]): DateTime[] {
    if (this.filterValue < 0) {
      return [dates[dates.length - this.filterValue]];
    }
    if (this.filterValue >= dates.length || this.filterValue < 0) {
      return [];
    }
    return [dates[this.filterValue]];
  }
}
