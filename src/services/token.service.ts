import { Injectable, signal } from '@angular/core';
import { ITokenService } from '../common/angular/interceptors';

@Injectable()
export class TokenService implements ITokenService {
  token = signal<string>("");

  getToken() {
    return this.token();
  }

  setToken(token: string) {
    this.token.set(token);
  }
}
