import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, from } from 'rxjs';
import { IHaveOffset } from '../../models/airtable/IAirtableResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  readonly MAX_PAGE_COUNT = 100;

  getAllPages<T extends IHaveOffset>(
    observableFactory: (params?: Params) => Observable<T>,
    takeWhile: ((item: T) => boolean) | null = null,
    queryParams?: Params,
    count = 0) {
    if (count > this.MAX_PAGE_COUNT) {
      console.log('Max page count reached');
      return from([])
    }
    count++;
    return new Observable<T>(subscriber => {
      observableFactory(queryParams).subscribe(response => {
        subscriber.next(response);
        var doesNotHaveNext = response.offset === null || response.offset === undefined;
        var shouldNotTakeNext = takeWhile != null && takeWhile(response);
        if (doesNotHaveNext || shouldNotTakeNext) {
          subscriber.complete();
          return;
        }
        queryParams = { ...queryParams, offset: response.offset };
        this.getAllPages(
          observableFactory,
          takeWhile,
          queryParams,
          count
        ).subscribe({
          next: (records: T) => subscriber.next(records),
          error: (error: unknown) => subscriber.error(error),
          complete: () => subscriber.complete()
        });
      })
    });
  }
}
