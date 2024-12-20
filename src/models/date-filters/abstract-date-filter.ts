import { DateTime } from "luxon";

export abstract class DateFilter<T> {
  public get order() {
    return this._order;
  }
  public get filterValue() {
    return this._filterValue;
  }

  constructor(
    private _order: number,
    private _filterValue: T,
  ) { }

  abstract filter(date: DateTime): boolean;
}
