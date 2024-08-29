import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, map, Observable, of } from 'rxjs';
import { IBase } from '../interfaces/airtable/IBase';
import { IRecords } from '../interfaces/airtable/IRecords';

@Injectable({ providedIn: 'root' })
export class AirtableApiService {
  readonly BASE_URL = "https://api.bitbucket.org/2.0/"
  readonly REPOSITORIES_URL = this.BASE_URL + "repositories"

  baseIDs: { [key: string]: IBase } = {}

  constructor(
    private http: HttpClient
  ) { }

  getRecords<T>(baseName: string, tableIdOrName: string): Observable<IRecords<T>> {
    return this.getBaseByName(baseName)
      .pipe(
        concatMap(base => {
          if (!base) {
            return of<IRecords<T>>({ records: [] });
          }
          this.baseIDs[baseName] = base;
          return this.http.get<IRecords<T>>(`https://api.airtable.com/v0/${base.id}/${tableIdOrName}`)
        })
      )
  }

  getBaseByName(baseName: string): Observable<IBase | undefined> {
    var baseID = this.baseIDs[baseName];
    if (baseID !== undefined) {
      return of(this.baseIDs[baseName]);
    }
    return this.http.get<{ bases: IBase[] }>(`https://api.airtable.com/v0/meta/bases`)
      .pipe(
        map(basesResponse => basesResponse.bases.find(base => base.name === baseName))
      )
  }
}
