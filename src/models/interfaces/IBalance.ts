import { DateTime } from "luxon";
import { Transaction } from "models/Transactions";

export interface IBalanceOnDate {
  date: DateTime;
  balance: number;
  previousBalance: IBalanceOnDate | null;
  transactions: Transaction[];
  isProjected: boolean;
}
