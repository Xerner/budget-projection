import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { IRecords, IRecordsExt } from '../../models/airtable/api/IRecords';
import { IRecordsQueryParams } from '../../models/airtable/api/IRecordsQueryParams';
import { Endpoints } from '../../models/Endpoints';
import { STRINGS } from '../../common/library';
import { IFields } from '../../models/airtable/api/IFields';
@Injectable({ providedIn: 'root' })
export class RecordsApiService {
  readonly MAX_PAGE_COUNT = 10000;

  constructor(
    private http: HttpClient
  ) { }

  getRecords<T extends IFields>(baseId: string, tableIdOrName: string, queryParams?: IRecordsQueryParams): Observable<IRecordsExt<T>> {
    return this.http.get<IRecords<T>>(STRINGS.format(Endpoints.GET_RECORDS, { baseId, tableIdOrName }), { params: queryParams })
      .pipe(map(response => ({ baseId, tableIdOrName, ...response })));
  }

  getAllPages<T extends IFields>(
    entryObservable: Observable<IRecordsExt<T>>,
    headers: HttpHeaders | { [header: string]: string | string[]; },
    takeWhile: ((item: IRecordsExt<T>) => boolean) | null = null,
    queryParams: HttpParams | {} = {},
    count = 0) {
  if (count > this.MAX_PAGE_COUNT) {
    return from([])
  }
  count++;
  return new Observable<IRecordsExt<T>>(subscriber => {
    entryObservable.subscribe(records => {
      subscriber.next(records);
      var hasNext = records.offset !== null && records.offset !== undefined;
      var shouldTakeNext = takeWhile != null && takeWhile(records);
      if (hasNext === false || shouldTakeNext === false) {
        subscriber.complete();
        return;
      }
      queryParams = { ...queryParams, offset: records.offset };
      this.getAllPages(
        this.getRecords<T>(
          records.baseId,
          records.tableIdOrName,
          { params: queryParams, headers: headers }
        ),
        headers,
        takeWhile,
        queryParams,
        count
      ).subscribe({
        next: (values: IRecordsExt<T>) => {
          subscriber.next(values)
        },
        error: (error: unknown) => {
          subscriber.error(error)
        },
        complete: () => {
          subscriber.complete()
        }
      });
    })
  });
}
}
