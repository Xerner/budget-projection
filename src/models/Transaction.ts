import { DateTime } from "luxon";
import { Account } from "./Account";

export class Transaction {
  indexOnDay: number = 0;
  private originalStartingBalance: number = 0;
  get OriginalStartingBalance() {
    return this.originalStartingBalance;
  }

  constructor(
    readonly id: string,
    readonly date: DateTime<boolean>,
    public sortOrder: number,
    readonly description: string,
    readonly category: string,
    readonly amount: number,
    readonly account: Account,
    public startingBalance: number
  ) {
    this.originalStartingBalance = startingBalance;
  }

  calculatedBalance() {
    return this.startingBalance + this.getAmount();
  }

  getAmount() {
    if (this.account.type === 'Credit') {
      return -this.amount; // Credit accounts are negative cuz that money ain't yours
    }
    return this.amount;
  }

  isExpense() {
    return this.amount < 0 && this.account.type === 'Debit'
        || this.amount > 0 && this.account.type === 'Credit';
  }

  isIncome() {
    return this.amount > 0 && this.account.type === 'Debit';
  }

  isCreditPayoff() {
    return this.amount < 0 && this.account.type === 'Credit';
  }

  compareOrder(other: Transaction) {
    if (this.date.diff(other.date, 'days').days === 0) {
      return this.sortOrder - other.sortOrder;
    }
    return this.date.diff(other.date, 'days').days;
  }

  clone() {
    return new Transaction(
      this.id,
      this.date,
      this.sortOrder,
      this.description,
      this.category,
      this.amount,
      this.account,
      this.startingBalance
    );
  }
}
