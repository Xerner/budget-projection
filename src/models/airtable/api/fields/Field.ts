import { ArrayField, BooleanField, DateField, NumberField, StringField } from "./PrimitiveFields";

/**
 * Just implementing string for now. See {@link https://airtable.com/developers/web/api/field-model}
 */
export type Field<T = any> = StringField | NumberField | BooleanField | ArrayField<T> | DateField;
