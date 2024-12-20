import { DateTime } from "luxon";
import { DateFilter } from "./abstract-date-filter";

export class DayOfWeekFilter extends DateFilter<number> {
  override filter(date: DateTime): boolean {
    return date.weekday === this.filterValue;
  }
}
