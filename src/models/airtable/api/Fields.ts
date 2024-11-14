export interface IFields {
  [key: string]: Field | any;
}

/**
 * Just implementing string for now. See {@link https://airtable.com/developers/web/api/field-model}
 */
export type Field<T = any> = StringField | NumberField | BooleanField | ArrayField<T> | DateField;

export type LinkToAnotherRecordField = ArrayField<string>;

/**
 * {@link https://airtable.com/developers/web/api/field-model}
 */
export type NumberField = number;
/**
 * {@link https://airtable.com/developers/web/api/field-model}
 */
export type BooleanField = boolean;
/**
 * {@link https://airtable.com/developers/web/api/field-model}
 */
export type StringField = string;
/**
 * {@link https://airtable.com/developers/web/api/field-model}
 */
export type DateField = StringField;
/**
 * {@link https://airtable.com/developers/web/api/field-model}
 */
export type ArrayField<T> = T[];
