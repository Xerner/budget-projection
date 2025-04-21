import { InjectionToken, makeEnvironmentProviders, Provider } from "@angular/core";
import { provideRouter } from '@angular/router';
import { QueryParamsService } from "./query-params.service";
import { QueryParamKeys } from "./types/QueryParamKeys";

export const QUERY_PARAM_KEYS = new InjectionToken<QueryParamKeys<unknown>>("QUERY_PARAM_KEYS");

/**
 * Provides {@link QueryParamsService} to interact with url query parameters as signals.
 * {@link provideRouter} must be used in the application configuration for this to work.
 */
export function provideQueryParams<TQueryParamsEnum>(queryParamKeys: QueryParamKeys<TQueryParamsEnum>) {
  const providers: Provider[] = [
    { provide: QUERY_PARAM_KEYS, useValue: queryParamKeys },
    QueryParamsService
  ]

  return makeEnvironmentProviders(providers);
}
