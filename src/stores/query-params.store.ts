import { Injectable } from '@angular/core';
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
export class QueryParamsStore {
  queryParams: Record<QueryParamKey, BehaviorSubject<any>> = {
    [QueryParamKey.baseName]: new BehaviorSubject<string | null>(null),
    [QueryParamKey.tableName]: new BehaviorSubject<string | null>(null),
    [QueryParamKey.token]: new BehaviorSubject<string | null>(null),
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    for (const key in QueryParamKey) {
      if (this.queryParams[key as keyof typeof QueryParamKey]) {
        this.subscribeToKeepQueryParamsInUrlUpToDate(key as QueryParamKey);
      }
    }
  }

  private subscribeToKeepQueryParamsInUrlUpToDate(queryParamKey: QueryParamKey) {
    this.route.queryParamMap.subscribe((params) => {
      const value = params.get(queryParamKey);
      if (value == this.queryParams[queryParamKey].value) {
        return;
      }
      this.queryParams[queryParamKey].next(value);
    });
    this.queryParams[queryParamKey].subscribe((value) => {
      const urlValue = this.route.snapshot.queryParamMap.get(queryParamKey);
      if (urlValue == value) {
        return;
      }
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
