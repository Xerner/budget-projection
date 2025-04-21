import { Inject, Injectable } from '@angular/core';
import { IHttpCacheItem, ISerializedHttpCacheItem, ISerializedHttpRequest } from './types/IHttpCacheItem';
import { IHttpCacheSettings } from './types/IHttpCacheSettings';
import { HTTP_CACHE_SETTINGS, PRELOADED_HTTP_CACHE } from './tokens';
import { HttpEvent, HttpEventType, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from "@angular/common/http";
import { COMPARERS, LooseValue } from '../../../library/comparers';
import { RequestMethods } from './types/RequestMethods';

@Injectable({ providedIn: 'root' })
export class HttpCacheService {
  /**
   * The cache storage.
   * @private
   */
  private _cache: IHttpCacheItem<any>[] = [];

  /**
   * Gets the cache as a read-only array.
   */
  get cache(): Readonly<IHttpCacheItem<any>[]> {
    return this._cache;
  }

  /**
   * Creates an instance of HttpCacheService.
   * @param settings The cache settings.
   * @param preloadedCache The preloaded cache items.
   */
  constructor(
    @Inject(HTTP_CACHE_SETTINGS) public settings: IHttpCacheSettings,
    @Inject(PRELOADED_HTTP_CACHE) preloadedCache: ISerializedHttpCacheItem[],
  ) {
    this.initialize(preloadedCache);
  }

  /**
   * Initializes the cache with preloaded values.
   * @param cache The preloaded cache items.
   * @private
   */
  private initialize(cache: ISerializedHttpCacheItem[]) {
    console.log("Initializing cache with values", cache);
    var deserializedCache: IHttpCacheItem[] = cache.map<IHttpCacheItem>((serializedRequest) => {
      var deserializedRequest: IHttpCacheItem = {
        request: new HttpRequest<any>(
          serializedRequest.request.method,
          serializedRequest.request.url,
          serializedRequest.request.body as any | null,
          {
            params: new HttpParams({ fromString: serializedRequest.request.params }),
          }
        ),
        response: new HttpResponse({
          body: serializedRequest.response.body,
          headers: new HttpHeaders(serializedRequest.response.headers),
          status: serializedRequest.response.status,
          statusText: serializedRequest.response.statusText,
          url: serializedRequest.response.url,
        }),
      }
      return deserializedRequest;
    });
    this._cache = deserializedCache;
  }

  /**
   * Finds a cache item by request or method, URL, and params.
   * @param method The HTTP request or method.
   * @param url The URL (optional if method is a request).
   * @param params The HTTP params (optional).
   * @returns The cache item or null if not found.
   */
  find<T>(request: HttpRequest<T>): IHttpCacheItem<T> | null
  find<T>(method: string, url: string, params?: HttpParams): IHttpCacheItem<T> | null
  find<T>(method: HttpRequest<T> | string, url?: string, params?: HttpParams): IHttpCacheItem<T> | null {
    var request = typeof method === "string" ? null : method;
    method = request === null ? method : request.method;
    url = request === null ? url : request.url;
    params = request === null ? params : request.params;
    if (url === undefined) {
      return null;
    }
    var item = this.cache.find((item) => {
      if (item.request.method !== method || item.request.url !== url) {
        return false;
      }
      return this.paramsAreBasicallyEqual(params, item.request.params);
    })
    return item ?? null;
  }

  /**
   * Checks if a cache item exists by request or method, URL, and params.
   * @param method The HTTP request or method.
   * @param url The URL (optional if method is a request).
   * @param params The HTTP params (optional).
   * @returns True if the cache item exists, false otherwise.
   */
  has<T>(request: HttpRequest<T>): boolean;
  has(method: string, url: string, params?: HttpParams): boolean;
  has<T>(method: HttpRequest<T> | string, url?: string, params?: HttpParams): boolean {
    if (typeof method === "string") {
      if (url === undefined) {
        return false;
      }
      return this.find(method, url, params) !== null;
    }
    return this.find(method) !== null;
  }

  /**
   * Inserts a response into the cache.
   * @param request The HTTP request.
   * @param response The HTTP response.
   */
  insert<T>(request: HttpRequest<T>, response: HttpEvent<T>) {
    if (response.type !== HttpEventType.Response) {
      return;
    }
    if (this.settings.verbose) {
      console.log("Caching results for", request.method, request.url, request.params);
    }
    this._cache.push(this.createHttpCacheItem(request, response))
  }

  /**
   * Creates a cache item from a request and response.
   * @param request The HTTP request.
   * @param response The HTTP response.
   * @returns The cache item.
   * @private
   */
  private createHttpCacheItem<T>(request: HttpRequest<T>, response: HttpResponse<T>): IHttpCacheItem<T> {
    return {
      request: request,
      response: response,
    }
  }

  /**
   * Checks if the params are defined and have keys.
   * @param params The HTTP params.
   * @returns True if params are defined and have keys, false otherwise.
   */
  hasParams(params?: HttpParams): boolean {
    return params === undefined || params.keys().length > 0;
  }

  /**
   * Compares two sets of HTTP params for equality. This method is not strict.
   * It will consider values such as null, undefined, empty strings, and empty objects as having no 'value'.
   * It will also consider two sets of query params equal if one has a missing query param that exists in the other, but the one that it exists in has no 'value'.
   *
   * @param params1 The first set of params.
   * @param params2 The second set of params.
   * @returns True if the params are equal, false otherwise.
   */
  paramsAreBasicallyEqual(params1?: HttpParams, params2?: HttpParams): boolean {
    var looseParams1 = this.convertHttpParamsToLooseValue(params1);
    var looseParams2 = this.convertHttpParamsToLooseValue(params2);
    return COMPARERS.areBasicallyEqual(looseParams1, looseParams2);
  }

  /**
   * Clears the cache or removes a specific cache item.
   * @param method The HTTP request or method (optional).
   * @param url The URL (optional if method is a request).
   * @param params The HTTP params (optional).
   */
  bust(): void
  bust<T>(request: HttpRequest<T>): void;
  bust(method: string, url: string, params?: HttpParams): void;
  bust<T>(method?: HttpRequest<T> | string, url?: string, params?: HttpParams): void {
    if (method === undefined) {
      if (this.settings.verbose) {
        console.log("Busting all cached http responses");
      }
      this._cache = [];
      return;
    }
    if (typeof method === "string") {
      var item = this.find(method, url!, params);
      if (item === null) {
        return;
      }
      if (this.settings.verbose) {
        console.log("Busting cached http response for", method, url, params);
      }
      this._cache = this.cache.filter((cacheItem) => cacheItem !== item);
      return;
    }
    item = this.find(method);
    if (item === null) {
      return;
    }
    if (this.settings.verbose) {
      console.log("Busting cached http response for", method.method, method.url, method.params);
    }
    this._cache = this.cache.filter((cacheItem) => cacheItem !== item);
  }

  private convertHttpParamsToLooseValue(params?: HttpParams): LooseValue {
    if (params instanceof HttpParams) {
      var keys = params.keys();
      return keys.map((key) => [key, params.get(key)!]);
    }
    return params;
  }

  serialize(): ISerializedHttpCacheItem[] {
    return this.cache.map((item) => {
      var serializedItem: ISerializedHttpCacheItem = {
        request: this.serializeRequest(item.request),
        response: this.serializeResponse(item.response),
      }
      return serializedItem;
    });
  }

  serializeHeaders(headers: HttpHeaders): Exclude<Pick<ISerializedHttpRequest, "headers">['headers'], string | Headers> {
    return headers.keys().reduce((obj, key) => {
      obj[key] = headers.get(key) ?? "";
      return obj;
    }, {} as Exclude<Pick<ISerializedHttpRequest, "headers">['headers'], string | Headers>);
  }

  serializeRequest<T>(request: HttpRequest<T>) {
    return {
      method: request.method,
      url: request.url,
      params: request.params.toString(),
      body: request.body,
      responseType: request.responseType,
      withCredentials: request.withCredentials,
      urlWithParams: request.urlWithParams,
      headers: this.serializeHeaders(request.headers),
    }
  }

  serializeResponse<T>(response: HttpResponse<T>) {
    return {
      body: response.body,
      headers: this.serializeHeaders(response.headers),
      status: response.status,
      statusText: response.statusText,
      url: response.url ?? "",
      ok: response.ok,
      type: response.type,
    };
  }
}
