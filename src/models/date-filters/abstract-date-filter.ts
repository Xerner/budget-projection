import { DateTime } from "luxon";

export abstract class DateFilter<T> {
  public get order() {
    return this._order;
  }
  public get filterValue(): T {
    return this._filterValue as T;
  }

  constructor(
    private _order: number,
    private _filterValue: T | string,
  ) {
    if (typeof _filterValue === 'string') {
      this._filterValue = this.convert(_filterValue);
    }
  }

  convert(value: string) {
    return value as unknown as T;
  }
  abstract filter(dates: DateTime[]): DateTime[];
}
