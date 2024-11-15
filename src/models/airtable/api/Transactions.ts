import { BooleanField, DateField, IFields, LinkToAnotherRecordField, NumberField, StringField } from "./Fields";

export interface ApiTransaction extends IFields {
  "Date": DateField;
  "Description": StringField;
  "Category": StringField;
  "Amount": NumberField;
  "Account": LinkToAnotherRecordField;
  "Running Balance": NumberField;
}

export interface ApiPlannedTransaction extends IFields {
  "Description": StringField;
  "Active": BooleanField;
  "Amount": NumberField;
  "Priority": StringField;
  "Category": StringField;
  "Is Income": StringField;
  "Account": LinkToAnotherRecordField;
  "Occurrence": StringField;
  "Autopay": BooleanField;
  "Shared": BooleanField;
  "Date Of Transaction": DateField;
}
