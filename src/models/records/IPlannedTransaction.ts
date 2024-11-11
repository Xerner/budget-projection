import { LinkToAnotherRecordField } from "../airtable/api/fields/LinkToAnotherRecordField";
import { StringField, NumberField, DateField, BooleanField } from "../airtable/api/fields/PrimitiveFields";

export type PlannedTransaction = {
  "Description": StringField;
  "Active": BooleanField;
  "Amount": NumberField;
  "Priority": StringField;
  "Category": StringField;
  "IsIncome": StringField;
  "Account": LinkToAnotherRecordField;
  "Occurence": StringField;
  "Autopay": BooleanField;
  "Shared": BooleanField;
  "Date Of Transaction": DateField;
}

export enum PlannedTransactionTableColumns {
  Description = 'Description',
  Active = 'Active',
  Amount = 'Amount',
  Priority = 'Priority',
  Category = 'Category',
  IsIncome = 'Is Income',
  Account = 'Account',
  Occurence = 'Occurence',
  Autopay = 'Autopay',
  Shared = 'Shared?',
  DateOfTransaction = 'Date Of Transaction',
}
