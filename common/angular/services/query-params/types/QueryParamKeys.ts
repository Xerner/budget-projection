import { QueryParamValue } from "./QueryParamValue";

/**
 * A type that represents the keys of the query parameters that are being tracked by the store. 
 * The values of the keys are the expected query parameter names.
 * 
 * @example 
 * interface QueryParams {
 *   userId: number;
 *   sessionId: string;
 *   isAdmin: boolean;
 * }
 * 
 * const queryParamKeys: QueryParamKeys<QueryParams> = {
 *   sort: 'sort',
 *   page: 'page',
 *   limit: 'limit'
 * };
 */
export type QueryParamKeys<T> = { [key in keyof T & string]: QueryParamValue };
