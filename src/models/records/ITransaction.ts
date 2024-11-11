import { LinkToAnotherRecordField } from "../airtable/api/fields/LinkToAnotherRecordField";
import { DateField, StringField, NumberField } from "../airtable/api/fields/PrimitiveFields";

export type Transaction = {
  "Date": DateField;
  "Description": StringField;
  "Category": StringField;
  "Amount": NumberField;
  "Account": LinkToAnotherRecordField;
  "Running Balance": NumberField;
}

export enum TransactionTableColumns {
  Date = 'Date',
  Description = 'Description',
  Category = 'Category',
  Amount = 'Amount',
  RunningBalance = 'Running Balance',
  Account = 'Account',
}
