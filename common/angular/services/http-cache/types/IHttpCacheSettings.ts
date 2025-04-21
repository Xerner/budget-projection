export interface IHttpCacheSettings {
  /**
   * If true, the {@link HttpCachingInterceptor} will be injected to cache responses.
   *
   * @default true
   */
  enableInterceptor?: boolean;
  /**
   * Whether or not to store the Authorization header on requests.
   * WARNING: Authorization headers can contain sensitive information such as bearer tokens.
   * Do not enable this setting if you don't know what you are doing
   *
   * @default false
   */
  shouldCacheAuthorization?: boolean,
  /**
   * If true, logs all cache hits and misses to the console.
   *
   * @default false
   */
  verbose?: boolean;
}
