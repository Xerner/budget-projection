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
    private _filterValue: T | string,
  ) {
    if (typeof _filterValue === 'string') {
      this._filterValue = this.convert(_filterValue);
    }
  }

  abstract convert(value: string): T;
  abstract filter(date: DateTime): boolean;
}
