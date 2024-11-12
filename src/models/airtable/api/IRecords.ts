import { IFields } from "./IFields";
import { IRecord } from "./IRecord";

export interface IRecords<TFields extends IFields = IFields, TRecord extends IRecord<TFields> = IRecord<TFields>> {
  records: TRecord[];
  offset?: string;
}

export interface IRecordsExt<T extends IFields = IFields> extends IRecords<T> {
  baseId: string;
  tableIdOrName: string;
}
