import { QueryParamKeys } from "../common/angular/services/query-params/types/QueryParamKeys";

export interface IGlobalQueryParams {
  baseName: string;
  transactionTableName: string;
  token: string;
} 

export const QueryParams: QueryParamKeys<IGlobalQueryParams> = {
  baseName: 'baseName',
  transactionTableName: 'transactionTableName',
  token: 'token',
}
