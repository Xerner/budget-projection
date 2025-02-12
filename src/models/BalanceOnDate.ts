import { DateTime } from "luxon";
import { Transaction } from "src/models/Transaction";

export class BalanceOnDate {
  constructor(
    readonly date: DateTime,
    readonly balance: number,
    readonly transactions: Transaction[],
  ) { }
}
