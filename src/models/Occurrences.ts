import { Duration, DurationLike } from "luxon";

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

export function OccurrenceToDuration(occurence: Occurrence): Duration | null {
  switch (occurence) {
    case Occurrence.Monthly:
      return Duration.fromObject({ months: 1 });
    case Occurrence.Weekly:
      return Duration.fromObject({ weeks: 1 });
    case Occurrence.Yearly:
      return Duration.fromObject({ years: 1 });
    case Occurrence.BiMonthly:
      return Duration.fromObject({ months: 2 });
    case Occurrence.BiWeekly:
      return Duration.fromObject({ weeks: 2 });
    case Occurrence.Quarterly:
      return Duration.fromObject({ months: 3 });
    case Occurrence.SemiAnnually:
      return Duration.fromObject({ months: 6 });
    case Occurrence.AdHoc:
      return Duration.fromObject({ months: 0 });
    default:
      return null;
  }
}
