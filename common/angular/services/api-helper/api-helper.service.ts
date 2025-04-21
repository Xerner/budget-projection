import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { IPaginatedResponse } from "./IPaginated";

/**
 * Requires Angulars HttpClient to be provided
 */
export class ApiHelperService {
  readonly MAX_PAGE_COUNT = 10000;

  constructor(
    private http: HttpClient,
  ) { }

  getAllPages<T>(entryObservable: Observable<IPaginatedResponse<T>>, headers: HttpHeaders | { [header: string]: string | string[]; }, takeWhile: ((item: T[]) => boolean) | null = null, queryParams: HttpParams | {} = {}, count = 0) {
    if (count > this.MAX_PAGE_COUNT) {
      return from([])
    }
    count++;
    return new Observable<T[]>(subscriber => {
      entryObservable.subscribe(results => {
        subscriber.next(results.values);
        var hasNext = results.next != null && results.next != undefined;
        var shouldTakeNext = takeWhile != null && takeWhile(results.values);
        if (hasNext == false || shouldTakeNext == false) {
          subscriber.complete();
          return;
        }
        this.getAllPages(
          this.http.get<IPaginatedResponse<T>>(
            results.next,
            { params: queryParams, headers: headers }
          ),
          headers,
          takeWhile,
          queryParams,
          count
        ).subscribe({
          next: (values: T[]) => {
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
};
