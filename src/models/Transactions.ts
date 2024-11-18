import { DateTime } from "luxon";
import { Occurence } from "./IOccurences";

export interface ITransaction {
  id: string;
  date: DateTime;
  description: string;
  category: string;
  amount: number;
  account: string[];
}

export interface IProjectedTransaction extends ITransaction {
  "plannedTransaction": IPlannedTransaction;
}

export interface IPlannedTransaction {
  id: string;
  description: string;
  active: boolean;
  amount: number;
  priority: string;
  category: string;
  isIncome: string;
  account: string[];
  occurrence: Occurence;
  autopay: boolean;
  shared: boolean;
  dateOfTransaction: DateTime;
}

export interface IBalance {
  date: DateTime;
  balance: number;
  transactions: ITransaction[];
}
