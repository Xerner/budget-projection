import { HttpRequest, HttpResponse } from "@angular/common/http";

export interface IHttpCacheItem<T = any> {
  request: HttpRequest<T>;
  response: HttpResponse<T>;
}

export interface ISerializedHttpCacheItem {
  request: ISerializedHttpRequest;
  response: SerializedHttpResponse;
}

export interface ISerializedHttpRequest {
  url: string;
  body: string | object | null;
  withCredentials: boolean;
  responseType: string;
  method: string;
  headers: string | {
    [name: string]: string | number | (string | number)[];
  } | Headers;
  params: string;
  urlWithParams: string;
}

export interface SerializedHttpResponse {
  headers: string | {
    [name: string]: string | number | (string | number)[];
  } | Headers;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  type: number;
  body: string | object | null;
}
