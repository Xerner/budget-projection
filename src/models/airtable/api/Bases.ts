import { ITableSchema } from "./Tables";

export interface AirtableBase {
  id: string;
  name: string;
  permissionLevel: string;
}

export interface AirtableBaseSchema {
  tables: ITableSchema[];
}

export interface AirtableBaseSchemaExt extends AirtableBaseSchema {
  baseId: string;
}

export interface AirtableBasesResponse {
  bases: AirtableBase[],
  offset: string
}
