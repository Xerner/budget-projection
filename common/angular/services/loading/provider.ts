import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { makeEnvironmentProviders, Provider } from "@angular/core";
import { ILoadingService } from "./ILoadingService";
import { LoadingInterceptor } from "./loading.interceptor";
import { LOADING_SERVICE_TOKEN } from "./tokens";
import { LoadingService } from "./loading.service";

export enum LoadingFeatureKind {
  Interceptor,
}

export interface LoadingFeature<KindT extends LoadingFeatureKind> {
  kind: KindT;
  providers: Provider[];
}

function makeFeature<KindT extends LoadingFeatureKind>(
  kind: KindT,
  providers: Provider[],
): LoadingFeature<KindT> {
  return {
    kind: kind,
    providers: providers,
  };
}

/**
 * Provides the necessary providers for tracking the loading progress of generic items
 * @param loadingServiceClass The class to use for the loading service
 * @param token The token that will provide the loading service for the interceptor
 * @returns The array of providers to be used in the Angular environment
 */
export function provideLoadingTracking<T extends ILoadingService = LoadingService>(
    loadingServiceClass: new (...args: ConstructorParameters<typeof LoadingService>) => T,
    ...features: LoadingFeature<LoadingFeatureKind>[]
  ) {
  const providers: Provider[] = [
    loadingServiceClass,
    { provide: LOADING_SERVICE_TOKEN, useExisting: loadingServiceClass },
  ]
  for (var feature of features) {
    providers.push(...feature.providers);
  }
  return makeEnvironmentProviders(providers);
}

/**
 * Adds one or more functional-style HTTP interceptors to the configuration of the `HttpClient`
 * instance.
 *
 * @see {@link HttpInterceptorFn}
 * @see {@link provideHttpClient}
 * @publicApi
 */
export function withInterceptor(): LoadingFeature<LoadingFeatureKind.Interceptor> {
  return makeFeature(
    LoadingFeatureKind.Interceptor,
    [{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  );
}
