import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBaseSchema, IBaseSchemaExt } from '../../models/airtable/api/IBaseSchema';
import { IBasesResponse } from '../../models/airtable/api/IBasesResponse';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BasesApiService {
  constructor(private http: HttpClient) {}

  getBases() {
    return this.http.get<IBasesResponse>('https://api.airtable.com/v0/meta/bases');
  }

  getBaseSchema(baseId: string): Observable<IBaseSchemaExt> {
    return this.http.get<IBaseSchema>(`https://api.airtable.com/v0/meta/bases/${baseId}`)
      .pipe(map(response => ({ baseId: baseId, ...response })));
  }
}
