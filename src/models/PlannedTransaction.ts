import { DateTime } from "luxon";
import { Account } from "./Account";
import { Occurrence } from "./Occurences";

export class PlannedTransaction {
  constructor(
    public id: string,
    public description: string,
    public active: boolean,
    public amount: number,
    public priority: string,
    public category: string,
    public isIncome: string,
    public account: Account,
    public occurrence: Occurrence,
    public autopay: boolean,
    public shared: boolean,
    public dateOfTransaction: DateTime,
  ) { }
}
