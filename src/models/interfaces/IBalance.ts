import { DateTime } from "luxon";
import { ProjectedTransaction } from "models/ProjectedTransaction";
import { Transaction } from "models/Transactions";

export class BalanceOnDate {
  constructor(
    readonly date: DateTime,
    readonly balance: number,
    readonly transactions: Transaction[],
    readonly previousBalance: BalanceOnDate | null,
  ) { }

  hasProjectedTransactions() {
    return this.transactions.some(transaction => transaction instanceof ProjectedTransaction);
  }
}
