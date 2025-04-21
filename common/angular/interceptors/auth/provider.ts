import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { makeEnvironmentProviders, Provider } from "@angular/core";
import { IAuthTokenService } from "./IAuthTokenService";
import { AuthTokenInterceptor } from "./auth-token.interceptor";
import { AUTH_TOKEN_SERVICE } from "./token";

/**
 * Provides the necessary providers for bearer token authentication.
 *
 * This function sets up the HTTP interceptor and the token provider service
 * for bearer token authentication in an Angular application.
 *
 * @template T - The type of the token provider.
 * @param {new (...args: any[]) => T} authTokenProviderClass - The token provider class.
 * @returns {Provider[]} The array of providers to be used in the Angular environment.
 *
 * @example
 * ```ts
 * // In your Angular module
 * import { provideBearerTokenAuth } from './path/to/provider';
 * import { MyTokenProvider } from './path/to/my-token-provider';
 *
 * NgModule({
 *   providers: [
 *     provideBearerTokenAuth(MyTokenProvider)
 *   ]
 * })
 * export class AppModule {}
 * ```
 *
 * @example
 * ```ts
 * // In main.ts
 * import { provideBearerTokenAuth } from './path/to/provider';
 * import { MyTokenProvider } from './path/to/my-token-provider';
 *
 * bootstrapApplication(AppComponent, { providers: provideBearerTokenAuth(MyTokenProvider) })
 *   .catch((err) => console.error(err));
 * ```
 */
export function provideBearerTokenAuth<T extends IAuthTokenService>(
    authTokenProviderClass?: new (...args: any[]) => T
  ) {
  if (authTokenProviderClass === undefined) {
    authTokenProviderClass = AuthTokenInterceptor as any;
  }
  const providers: Provider[] = [
    authTokenProviderClass!,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    { provide: AUTH_TOKEN_SERVICE, useExisting: authTokenProviderClass! },
  ]

  return makeEnvironmentProviders(providers);
}
