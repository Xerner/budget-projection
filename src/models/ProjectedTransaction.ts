import { DateTime } from "luxon";
import { Account } from "./Account";
import { Transaction } from "./Transactions";
import { AirtablePlannedTransaction } from "./airtable/api";

export class ProjectedTransaction extends Transaction {
  constructor(
    date: DateTime<boolean>,
    sortOrder: number,
    description: string,
    category: string,
    amount: number,
    account: Account,
    startingBalance: number,
    readonly plannedTransaction: AirtablePlannedTransaction,
  ) {
    var id = "";
    super(id, date, sortOrder, description, category, amount, account, startingBalance);
  }
}
