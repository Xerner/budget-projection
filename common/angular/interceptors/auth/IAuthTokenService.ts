export interface IAuthTokenService<T = string> {
  setToken(token: T): void;
  getToken(): T;
}
