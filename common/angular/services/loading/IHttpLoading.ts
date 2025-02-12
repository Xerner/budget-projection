import { HttpEvent, HttpRequest } from "@angular/common/http";
import { ILoadingItem } from "./ILoading";

export interface IHttpLoadingContext<T = any> {
  request: HttpRequest<T>;
  response?: HttpEvent<T>;
}

export interface IHttpLoadingItem<T = any> extends ILoadingItem<IHttpLoadingContext<T>> {
  source: string;
  context: IHttpLoadingContext<T>;
}
