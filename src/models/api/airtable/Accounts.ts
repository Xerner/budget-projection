import { IFields, StringField } from "./Fields";
import { IRecord } from "./Records";

export interface AirtableAccount extends IRecord<AirtableAccountFields> {
}

export interface AirtableAccountFields extends IFields {
  Name: StringField;
  Owner: StringField;
  Aliases: StringField;
  Type: StringField;
}
