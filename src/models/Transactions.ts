import { DateTime } from "luxon";
import { Account } from "./Account";

export class Transaction {
  indexOnDay: number = 0;

  constructor(
    readonly id: string,
    readonly date: DateTime<boolean>,
    readonly sortOrder: number,
    readonly description: string,
    readonly category: string,
    readonly amount: number,
    readonly account: Account,
    public startingBalance: number
  ) { }

  calculatedBalance() {
    return this.startingBalance + this.amount;
  }

  getAmount() {
    switch (this.account.type) {
      case "Debit":
        return this.amount;
      case "Credit":
        return -this.amount;
      default:
        return this.amount;
    }
  }

  compareOrder(other: Transaction) {
    if (this.date.valueOf() === other.date.valueOf()) {
      return this.sortOrder - other.sortOrder;
    }
    return this.date.valueOf() - other.date.valueOf();
  }
}
