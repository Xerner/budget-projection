import { DateFilter } from "./date-filters/abstract-date-filter";
import { PlannedTransaction } from "./PlannedTransaction";

export class PlannedTransactionDateFilter<T = any> {
  constructor(
    public transaction: PlannedTransaction,
    public dateFilter: DateFilter<T>,
  ) { }
}
