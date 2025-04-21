export { IHttpCacheItem, ISerializedHttpCacheItem, ISerializedHttpRequest, SerializedHttpResponse } from "./types/IHttpCacheItem";
export { IHttpCacheSettings } from "./types/IHttpCacheSettings";
export { HttpCachingInterceptor } from "./caching.interceptor";
export { HttpCacheService as HttpCacheStore } from "./http-cache.service";
export { provideHttpClientWithCache as provideHttpCacheClient } from "./provider";
export { HTTP_CACHE_SETTINGS, PRELOADED_HTTP_CACHE } from "./tokens";
