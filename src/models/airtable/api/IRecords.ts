export interface IRecords<T> {
  records: T[];
}

export interface IRecordsExt<T> extends IRecords<T> {
  baseId: string;
  tableIdOrName: string;
}
