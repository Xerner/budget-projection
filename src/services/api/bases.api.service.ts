import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBaseSchema, IBaseSchemaExt } from '../../models/airtable/api/IBaseSchema';
import { IBasesResponse } from '../../models/airtable/api/IBasesResponse';
import { map, Observable, of } from 'rxjs';
import { Endpoints } from '../../models/Endpoints';
import { STRINGS } from '../../common/library';

@Injectable({ providedIn: 'root' })
export class BasesApiService {
  constructor(private http: HttpClient) {}

  getBases() {
    return this.http.get<IBasesResponse>(Endpoints.GET_BASES);
  }

  getBaseSchema(baseId: string): Observable<IBaseSchemaExt> {
    if (!baseId) {
      return of();
    }
    return this.http.get<IBaseSchema>(STRINGS.format(Endpoints.GET_BASESCHEMA, { baseId: baseId }))
      .pipe(map(response => ({ baseId: baseId, ...response })));
  }
}
