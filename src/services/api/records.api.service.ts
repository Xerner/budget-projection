import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IRecords, IRecordsExt } from '../../models/airtable/api/IRecords';
import { IRecordsQueryParams } from '../../models/airtable/api/IRecordsQueryParams';
import { Endpoints } from '../../models/Endpoints';
@Injectable({ providedIn: 'root' })
export class RecordsApiService {
  constructor(
    private http: HttpClient
  ) { }

  getRecords<T>(baseId: string, tableIdOrName: string, queryParams?: IRecordsQueryParams): Observable<IRecordsExt<T>> {
    return this.http.get<IRecords<T>>(Endpoints.GET_RECORDS, { params: queryParams })
      .pipe(map(response => ({ baseId, tableIdOrName, ...response })));
  }
}
