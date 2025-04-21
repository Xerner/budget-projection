import { inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { AUTH_TOKEN_SERVICE } from './token';
import { IAuthTokenService } from './IAuthTokenService';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor, IAuthTokenService<string> {
  token = '';

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    var bearerTokenService = inject(AUTH_TOKEN_SERVICE)
    var token = bearerTokenService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });
    return next.handle(req);
  }
}
