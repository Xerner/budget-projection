import { AccountType } from "models/Account";
import { IFields, StringField } from "./Fields";

export interface AirtableAccount extends IFields {
  id: StringField;
  name: StringField;
  owner: StringField;
  aliases: StringField;
  type: AccountType;
}
