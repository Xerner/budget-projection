import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IRecords, IRecordsExt } from '../../models/airtable/api/IRecords';
import { IRecordsQueryParams } from '../../models/airtable/api/IRecordsQueryParams';
import { Endpoints } from '../../models/Endpoints';
import { STRINGS } from '../../common/library';
import { IFields } from '../../models/airtable/api/IFields';
@Injectable({ providedIn: 'root' })
export class RecordsApiService {
  constructor(
    private http: HttpClient
  ) { }

  getRecords<T extends IFields>(baseId: string, tableIdOrName: string, queryParams?: IRecordsQueryParams): Observable<IRecordsExt<T>> {
    return this.http.get<IRecords<T>>(STRINGS.format(Endpoints.GET_RECORDS, { baseId, tableIdOrName }), { params: queryParams })
      .pipe(map(response => ({ baseId, tableIdOrName, ...response })));
  }
}
