import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

export enum QueryParamKey {
  baseName = 'baseName',
  tableName = 'tableName',
  token = 'token',
}

@Injectable({
  providedIn: 'root'
})
export class QueryParamsStore {
  queryParams: Record<QueryParamKey, Observable<string | null>> = {
    [QueryParamKey.baseName]: this.createQueryParamObservable(QueryParamKey.baseName),
    [QueryParamKey.tableName]: this.createQueryParamObservable(QueryParamKey.tableName),
    [QueryParamKey.token]: this.createQueryParamObservable(QueryParamKey.token),
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  createQueryParamObservable(name: string): Observable<string | null> {
    return this.route.queryParamMap.pipe(map<ParamMap, string | null>(params => params.get(name)));
  }

  update(queryParamKey: QueryParamKey, value: any) {
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
