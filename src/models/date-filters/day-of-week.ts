import { DateTime } from "luxon";
import { DateFilter } from "./abstract-date-filter";

export class DayOfWeekFilter extends DateFilter<string> {
  weekdayToNumber: Record<string, number> = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
    'Sunday': 7,
  }

  override filter(dates: DateTime[]): DateTime[] {
    return dates.filter(date => date.weekday === this.weekdayToNumber[this.filterValue]);
  }
}
