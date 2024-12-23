import { DateFilter } from "./date-filters/abstract-date-filter";

export class DateFilterEntity<TEntity, TFilterType = any> {
  constructor(
    public transaction: TEntity,
    public dateFilter: DateFilter<TFilterType>,
  ) { }
}
