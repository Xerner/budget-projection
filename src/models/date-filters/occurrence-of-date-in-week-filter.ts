import { DateTime } from "luxon";
import { DateFilter } from "./abstract-date-filter";

export class OccurrenceOfDateInWeek extends DateFilter<number> {
  override convert(value: string): number {
    return parseInt(value);
  }
  override filter(date: DateTime): boolean {
    return date.weekday === this.filterValue;
  }
}
