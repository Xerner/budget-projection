import { DateFilter } from "./date-filters/abstract-date-filter";

export class DateFilterEntity<TEntity, TFilterType = any> {
  constructor(
    public transaction: TEntity,
    public dateFilter: DateFilter<TFilterType>,
  ) { }

  static fromJson<TEntity, TFilterType = any>(json: any): DateFilterEntity<TEntity, TFilterType> {
    return new DateFilterEntity(
      json.transaction,
      json.dateFilter,
    );
  }
}
