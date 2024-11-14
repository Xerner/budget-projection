import { Params } from "@angular/router";
import { IFields } from "./Fields";

export interface IRecord<TFields extends IFields = IFields> {
  id: string;
  createdTime: string;
  fields: TFields;
  commentCount?: number;
}

export interface IRecords<TFields extends IFields = IFields, TRecord extends IRecord<TFields> = IRecord<TFields>> {
  records: TRecord[];
  offset?: string;
}

export interface IRecordsExt<T extends IFields = IFields> extends IRecords<T> {
  baseId: string;
  tableIdOrName: string;
}

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
