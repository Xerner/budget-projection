import { QueryParamKeys } from "../../repos/common/angular/query-params";

export interface IGlobalQueryParams {
  baseName: string;
  tableName: string;
  token: string;
} 

export const QueryParams: QueryParamKeys<IGlobalQueryParams> = {
  baseName: 'baseName',
  tableName: 'tableName',
  token: 'token',
}
