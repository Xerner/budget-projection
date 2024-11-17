import { QueryParamKeys } from "../common/angular/services/query-params/types/QueryParamKeys";

export interface IGlobalQueryParams {
  token: string;
  baseName: string;
  transactionTableName: string;
  plannedTransactionTableName: string;
  startingBalance: number;
  startingDate: string;
  endingDate: string;
}

export const QueryParams: QueryParamKeys<IGlobalQueryParams> = {
  token: 'token',
  baseName: 'baseName',
  transactionTableName: 'transactionTableName',
  plannedTransactionTableName: "plannedTransactionTableName",
  startingBalance: "startingBalance",
  startingDate: "startingDate",
  endingDate: "endingDate",
}
