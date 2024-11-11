import { IFields } from "./IFields";

export interface IRecord<TFields extends IFields = IFields> {
  id: string;
  createdTime: string;
  fields: TFields;
  commentCount?: number;
}
