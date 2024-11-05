import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { InputsService } from '../services/inputs.service';
import { IGlobalQueryParams } from '../settings/query-param-keys';
import { QueryParamsService } from '../common/angular/services';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private inputsService: InputsService,
    private queryParamsService: QueryParamsService<IGlobalQueryParams>,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    var token = this.inputsService.apiForm.controls[this.queryParamsService.keys.token].value;
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    return next.handle(req);
  }
}
