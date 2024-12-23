import { IFields, LinkToAnotherRecordField, NumberField, StringField } from "./Fields";
import { IRecord } from "./Records";

export interface AirtablePlannedTransactionDateFilter extends IRecord<AirtablePlannedTransactionDateFilterFields> { }

export interface AirtablePlannedTransactionDateFilterFields extends IFields {
  "Transaction": LinkToAnotherRecordField;
  "Date Filter Type": StringField;
  "Input": StringField;
  "Order": NumberField;
}
