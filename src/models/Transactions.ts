import { DateTime } from "luxon";
import { IPlannedTransaction } from "./interfaces/IPlannedTransactions";
import { Account } from "./Account";

export class Transaction {
  indexOnDay: number = 0;

  constructor(
    readonly id: string,
    readonly date: DateTime<boolean>,
    readonly sortOrder: number,
    readonly description: string,
    readonly category: string,
    private readonly amount: number,
    readonly account: Account,
    public startingBalance: number
  ) { }

  calculatedBalance() {
    return this.startingBalance + this.amount;
  }

  getAmount() {
    switch (this.account.type) {
      case "debit":
        return this.amount;
      case "credit":
        return -this.amount;
      default:
        return this.amount;
    }
  }
}

export class ProjectedTransaction extends Transaction {
  constructor(
    date: DateTime<boolean>,
    sortOrder: number,
    description: string,
    category: string,
    amount: number,
    startingBalance: number,
    readonly plannedTransaction: IPlannedTransaction
  ) {
    var id = "";
    var account = Account.GetDummyAccount();
    super(id, date, sortOrder, description, category, amount, account, startingBalance);
  }
}
