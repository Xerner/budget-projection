import { AccountType } from "models/Account";
import { IFields, StringField } from "./Fields";

export interface AirtableAccount extends IFields {
  id: StringField;
  Name?: StringField;
  Owner?: StringField;
  Aliases?: StringField;
  Type?: AccountType;
}
