import { Account } from "./Account";
import { Occurrence } from "./Occurrences";

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
    public bundledIn: PlannedTransaction,
  ) { }
}
