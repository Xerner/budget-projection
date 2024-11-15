import { DurationLike } from "luxon";

export enum Occurence {
  Monthly = "Monthly",
  Weekly = "Weekly",
  Yearly = "Yearly",
  BiMonthly = "Bi-Monthly",
  BiWeekly = "Bi-Weekly",
  Quarterly = "Quarterly",
  SemiAnnually = "Semi-Annually",
  AdHoc = "Ad-Hoc",
}

export function OccurenceToDuration(occurence: Occurence): DurationLike | null {
  switch (occurence) {
    case Occurence.Monthly:
      return { months: 1 };
    case Occurence.Weekly:
      return { weeks: 1 };
    case Occurence.Yearly:
      return { years: 1 };
    case Occurence.BiMonthly:
      return { months: 2 };
    case Occurence.BiWeekly:
      return { weeks: 2 };
    case Occurence.Quarterly:
      return { months: 3 };
    case Occurence.SemiAnnually:
      return { months: 6 };
    case Occurence.AdHoc:
      return { months: 0 };
    default:
      return null;
  }
}
