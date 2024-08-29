import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { InputsService } from '../services/inputs.service';
import { QueryParamKey } from '../stores/query-params.store';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private inputsService: InputsService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    var token = this.inputsService.apiForm.controls[QueryParamKey.token].value;
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    return next.handle(req);
  }
}
