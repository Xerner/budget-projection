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
    return [dates[this.filterValue]];
  }
}
