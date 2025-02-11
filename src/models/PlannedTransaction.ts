import { DateTime } from "luxon";
import { Account } from "./Account";
import { AirtablePlannedTransaction } from "./api/airtable";
import { Occurrence } from "./Occurrences";
import { INode } from "common/library/graphs/types/INode";

export class PlannedTransaction {
  constructor(
    public id: string,
    public description: string,
    public active: boolean,
    public amount: number,
    public priority: string,
    public category: string,
    public account: Account,
    public occurrence: Occurrence,
    public autopay: boolean,
    public startingDate: DateTime | null,
    public bundledIn: AirtablePlannedTransaction | null,
  ) { }

  toNode(allTransactions: PlannedTransaction[]): INode<PlannedTransaction> {
    var bundledInTransaction = allTransactions.find(transaction => transaction.id === this.bundledIn?.id)
    var dependents = bundledInTransaction === undefined ? [] : [bundledInTransaction.toNode(allTransactions)]
    return {
      body: this,
      getDependencies: () => [],
      getDependents: () => dependents,
    }
  }

  static fromJson(json: any): PlannedTransaction {
    return new PlannedTransaction(
      json.id,
      json.description,
      json.active,
      json.amount,
      json.priority,
      json.category,
      json.account,
      json.occurrence,
      json.autopay,
      json.startingDate,
      json.bundledIn,
    )
  }
}
