import { BooleanField, DateField, IFields, LinkToAnotherRecordField, NumberField, StringField } from "./Fields";

export interface ApiTransaction extends IFields {
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

export interface ApiPlannedTransaction extends IFields {
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
