import { QueryParamKeys } from "../common/angular/services/query-params/types/QueryParamKeys";

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
