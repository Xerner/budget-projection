import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, of } from 'rxjs';
import { Endpoints } from '../../models/Endpoints';
import { STRINGS } from '../../common/library';
import { AirtableBasesResponse, AirtableBaseSchemaExt, AirtableBaseSchema } from '../../models/airtable/api';

@Injectable({ providedIn: 'root' })
export class BasesApiService {
  constructor(private http: HttpClient) {}

  getBases() {
    return this.http.get<AirtableBasesResponse>(Endpoints.GET_BASES);
  }

  getBaseSchema(baseId: string): Observable<AirtableBaseSchemaExt> {
    if (!baseId) {
      return of();
    }
    return this.http.get<AirtableBaseSchema>(STRINGS.format(Endpoints.GET_BASESCHEMA, { baseId: baseId }))
      .pipe(map(response => ({ baseId: baseId, ...response })));
  }
}
