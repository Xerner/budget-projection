import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "../../../../angular/packages/common/http";
// import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { HttpCacheService } from "./http-cache.service";

/**
 * Intercepts HTTP requests and caches the responses, ending the interceptor chain early if a response is cached.
 * Put this interceptor at the end of the interceptor chain, or at the bottom of the app.config.ts providers array,
 * to ensure that it is the last interceptor to run.
 *
 * The intention behind creating this service was to cache responses without ever sending
 * the request to the server while developing front-ends for REST API's to avoid API limits.
 *
 * @example
 * ```ts
 * import preloadedCache from './some-json-file.json';
 *
 * const appConfig: ApplicationConfig = {
 *   providers: [
 *     ...
 *     // last in the list to ensure it is the last interceptor to run
 *     provideHttpCacheClient(cacheSettings, preloadedCache),
 *   ]
 * };
 *
 * bootstrapApplication(AppComponent, appConfig)
 *   .catch((err) => console.error(err));
 * ```
 */
@Injectable()
export class HttpCachingInterceptor implements HttpInterceptor {
  /**
   * @param {HttpCacheService} cacheService - The service used to cache HTTP responses.
   */
  constructor(
    private cacheService: HttpCacheService,
  ) { }

  /**
   * Intercepts an outgoing HTTP request, handles it, and caches the response.
   * If the response is already cached, it is returned immediately.
   * @param {HttpRequest<any>} req - The outgoing HTTP request.
   * @param {HttpHandler} handler - The next handler in the chain.
   * @returns {Observable<HttpEvent<unknown>>} - An observable of the HTTP event.
   */
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
    // this has to be injected here to prevent a circular dependency
    var interceptors = inject(HTTP_INTERCEPTORS);
    var cached = this.cacheService.find(req);
    var interceptorIndex = interceptors.findIndex(interceptor => interceptor instanceof HttpCachingInterceptor);
    if (cached) {
      if (this.cacheService.settings.verbose) {
        var interceptorsNotRan = interceptors.slice(interceptorIndex + 1);
        console.log("Request found in cache. Ending interceptor chain early and returning cached response for", req.url + req.params.toString(), interceptorsNotRan.length, "interceptors not run", interceptorsNotRan);
      }
      return of(cached.response);
    }
    return handler.handle(req).pipe(tap(event => this.cacheService.insert(req, event)));
  }
}
