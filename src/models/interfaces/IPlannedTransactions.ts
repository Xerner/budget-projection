import { DateTime } from "luxon";
import { Occurrence } from "./IOccurences";

export interface IPlannedTransaction {
  id: string;
  description: string;
  active: boolean;
  amount: number;
  priority: string;
  category: string;
  isIncome: string;
  account: string;
  occurrence: Occurrence;
  autopay: boolean;
  shared: boolean;
  dateOfTransaction: DateTime;
}
