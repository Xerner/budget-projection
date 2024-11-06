import { IBase } from "./IBase";
import { ITableSchema } from "./ITableSchema";

export interface IBaseSchema {
  tables: ITableSchema[];
}

export interface IBaseSchemaExt extends IBaseSchema {
  baseId: string;
}
