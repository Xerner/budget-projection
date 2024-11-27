import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Endpoints } from '../../models/Endpoints';
import { STRINGS } from '../../common/library';
import { ApiHelperService } from './api-helper.service';
import { IRecord, IRecords, IRecordsExt, IRecordsQueryParams } from '../../models/airtable/api';

@Injectable({ providedIn: 'root' })
export class RecordsApiService {
  constructor(
    private http: HttpClient,
    private apiHelper: ApiHelperService
  ) { }

  getRecords<TRecord extends IRecord>(baseId: string, tableIdOrName: string, queryParams?: IRecordsQueryParams): Observable<IRecordsExt<TRecord>> {
    return this.apiHelper.getAllPages((queryParams) => {
      var getRecordsObservable = this.http.get<IRecords<TRecord>>(STRINGS.format(Endpoints.GET_RECORDS, { baseId, tableIdOrName }), { params: queryParams })
        .pipe(map(response => ({ baseId, tableIdOrName, ...response })));
      return getRecordsObservable;
    }, null, queryParams);
  }
}
