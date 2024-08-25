import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export enum QueryParamKey {
  baseName = 'baseName',
  tableName = 'tableName',
  token = 'token',
}

@Injectable({
  providedIn: 'root'
})
export class QueryParamsService {
  queryParams: Record<QueryParamKey, BehaviorSubject<any>> = {
    [QueryParamKey.baseName]: new BehaviorSubject<string | null>(null),
    [QueryParamKey.tableName]: new BehaviorSubject<string | null>(null),
    [QueryParamKey.token]: new BehaviorSubject<string | null>(null),
  }

  subscribe(name: QueryParamKey) {
    return this.queryParams[name].asObservable();
  }

  set(name: QueryParamKey, value: any) {
    this.queryParams[name](value);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    for (const key in QueryParamKey) {
      if (this.queryParams[key as keyof typeof QueryParamKey]) {
        this.addUpdateQueryParamInUrlEffect(key as QueryParamKey);
      }
    }
  }

  private addUpdateQueryParamInUrlEffect(queryParamKey: QueryParamKey) {
    effect(() => {
      var value = this.queryParams[queryParamKey]();
      this.updateQueryParam(queryParamKey, value);
    });
  }

  private updateQueryParam(queryParamKey: QueryParamKey, value: any) {
    if (value == null) {
      return;
    }
    var currentValue = this.route.snapshot.queryParamMap.get(queryParamKey);
    const queryParams: Params = { [queryParamKey]: value.toString() };
    if (currentValue == value) {
      return;
    }
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      }
    );
  }
}
