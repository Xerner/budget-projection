import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { REQUEST_COUNTER_TOKEN } from "./token";

@Injectable()
export class RequestCounterInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var requestCounterService = inject(REQUEST_COUNTER_TOKEN)
    var count = requestCounterService.requestCounter();
    requestCounterService.requestCounter.set(count + 1)
    return next.handle(req);
  }
}
