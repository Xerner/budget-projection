import { DurationLike } from "luxon";

export enum Occurrence {
  Monthly = "Monthly",
  Weekly = "Weekly",
  Yearly = "Yearly",
  BiMonthly = "Bi-Monthly",
  BiWeekly = "Bi-Weekly",
  Quarterly = "Quarterly",
  SemiAnnually = "Semi-Annually",
  AdHoc = "Ad-Hoc",
}

export function OccurrenceToDuration(occurence: Occurrence): DurationLike | null {
  switch (occurence) {
    case Occurrence.Monthly:
      return { months: 1 };
    case Occurrence.Weekly:
      return { weeks: 1 };
    case Occurrence.Yearly:
      return { years: 1 };
    case Occurrence.BiMonthly:
      return { months: 2 };
    case Occurrence.BiWeekly:
      return { weeks: 2 };
    case Occurrence.Quarterly:
      return { months: 3 };
    case Occurrence.SemiAnnually:
      return { months: 6 };
    case Occurrence.AdHoc:
      return { months: 0 };
    default:
      return null;
  }
}
