import { ITableSchema } from "./Tables";

export interface IBase {
  id: string;
  name: string;
  permissionLevel: string;
}

export interface IBaseSchema {
  tables: ITableSchema[];
}

export interface IBaseSchemaExt extends IBaseSchema {
  baseId: string;
}

export interface IBasesResponse {
  bases: IBase[],
  offset: string
}
