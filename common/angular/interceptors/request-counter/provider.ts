import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestCounterInterceptor } from "./request-counter.interceptor";
import { IRequestCounter } from "./IRequestCounter";
import { makeEnvironmentProviders, Provider } from "@angular/core";
import { REQUEST_COUNTER_TOKEN } from "./token";

export function provideRequestCounterInterceptor<T extends IRequestCounter>(T: new () => T) {
  const providers: Provider[] = [
    { provide: HTTP_INTERCEPTORS, useClass: RequestCounterInterceptor, multi: true },
    { provide: REQUEST_COUNTER_TOKEN, useClass: T },
  ]

  return makeEnvironmentProviders(providers);
}
