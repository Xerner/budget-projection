import { Params } from '@angular/router';

export interface ISortObject {
  field: string;
  direction?: "asc" | "desc";
}

export interface IRecordsQueryParams extends Params {
  timeZone?: string;
  userLocale?: string;
  pageSize?: number;
  maxRecords?: number;
  offset?: string;
  view?: string;
  sort?: ISortObject[];
  filterByFormula?: string;
  cellFormat?: "json" | "string";
  fields?: string[];
  returnFieldsByFieldId?: boolean;
  recordMetadata?: ("commentCount")[];
}
