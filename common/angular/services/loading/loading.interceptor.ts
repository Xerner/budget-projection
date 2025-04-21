import { inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from "@angular/common/http";
import { tap } from 'rxjs';
import { LOADING_SERVICE_TOKEN } from './tokens';
import { IHttpLoadingItem } from './IHttpLoading';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    var loadingService = inject(LOADING_SERVICE_TOKEN);
    var loadingItem: IHttpLoadingItem = {
      source: request.url,
      context: {
        request: request,
      },
    }
    loadingService.start(loadingItem);
    return next.handle(request)
      .pipe(tap(response => {
        loadingItem.context.response = response;
        if (response.type === HttpEventType.Response || response.type === HttpEventType.Sent) {
          loadingService.stop(loadingItem);
        } else {
          loadingService.update(loadingItem);
        }
        return response;
      }));
  }
}
