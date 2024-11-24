import { Account } from "./Account";
import { Transaction } from "./Transactions";

export class AccountSummary {
  private _transactions: Transaction[] = [];
  private _income: number = 0;
  private _expense: number = 0;
  private _currentBalance: number = 0;

  get transactions(): Readonly<Transaction[]> {
    return this._transactions;
  }

  get income() {
    return this._income;
  }

  get expense() {
    return this._expense;
  }

  get currentBalance() {
    return this._currentBalance;
  }

  get startingBalance(): number {
    if (this.transactions.length === 0) {
      return 0;
    }
    return this.transactions[0].startingBalance;
  }

  constructor(
    readonly account: Account,
    transactions: Transaction[],
  ) {
    this.setTransactions(transactions);
  }

  setTransactions(transactions: Transaction[]) {
    this._transactions = transactions;
    this._transactions.sort((a, b) => a.compareOrder(b));
    this._income = this.calculateIncome();
    this._expense = this.calculateExpense();
    this._currentBalance = this.calculateCurrentBalance();
  }

  calculateIncome(): number {
    return this.transactions.reduce((income, transaction) => income + Math.max(transaction.getAmount(), 0), 0);
  }

  calculateExpense(): number {
    return this.transactions.reduce((expense, transaction) => expense + Math.min(transaction.getAmount(), 0), 0);
  }

  calculateCurrentBalance(): number {
    return this.transactions.reduce((balance, transaction) => balance + transaction.getAmount(), this.startingBalance);
  }
}
