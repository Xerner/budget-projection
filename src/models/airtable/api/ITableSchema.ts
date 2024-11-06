import { IBase } from "./IBase";

export interface IFieldOptions {
  // todo: add more types
  // https://airtable.com/developers/web/api/field-model
  [key: string]: string;
}

export interface IField {
  id: string;
  type?: FieldType;
  name: string;
  description?: string;
  options?: IFieldOptions;
}

export interface IView {
  id: string;
  name: string;
  type: ViewType;
  visibleFieldIds?: string[];
}

export interface ITableSchema {
  id: string;
  primaryFieldId: string;
  name: string;
  description?: string;
  fields: IField[];
  views: IView[];
}

export interface ITableSchemaExt extends ITableSchema {
  baseId: IBase, 
}


export type FieldType = "singleLineText" | "email" | "url" | "multilineText" | "number" | "percent" | "currency" | "singleSelect" | "multipleSelects" | "singleCollaborator" | "multipleCollaborators" | "multipleRecordLinks" | "date" | "dateTime" | "phoneNumber" | "multipleAttachments" | "checkbox" | "formula" | "createdTime" | "rollup" | "count" | "lookup" | "multipleLookupValues" | "autoNumber" | "barcode" | "rating" | "richText" | "duration" | "lastModifiedTime" | "button" | "createdBy" | "lastModifiedBy" | "externalSyncSource" | "aiText"
/**
 * block is a gantt chart
 */
export type ViewType = "grid" | "form" | "calendar" | "gallery" | "kanban" | "timeline" | "block"
