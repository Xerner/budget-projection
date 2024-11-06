import { Injectable } from '@angular/core';
import { InputsService } from './inputs.service';
import { IBearerTokenProvider } from '../common/angular/interceptors';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements IBearerTokenProvider {
  constructor(
    private inputsService: InputsService
  ) { }

  getToken() {
    return this.inputsService.apiForm.controls.token.value ?? "";
  }
}
