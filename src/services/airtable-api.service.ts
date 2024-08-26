import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, map, Observable, of } from 'rxjs';
import { IBase } from '../interfaces/airtable/IBase';
import { IRecords } from '../interfaces/airtable/IRecords';

@Injectable({ providedIn: 'root' })
export class AirtableApiService {
  readonly BASE_URL = "https://api.bitbucket.org/2.0/"
  readonly REPOSITORIES_URL = this.BASE_URL + "repositories"

  constructor(
    private http: HttpClient
  ) { }

  getRecords<T>(baseName: string, tableIdOrName: string): Observable<IRecords<T>> {
    return this.getBaseByName(baseName)
    .pipe(
      concatMap(base => base
        ? this.http.get<IRecords<T>>(`https://api.airtable.com/v0/${base.id}/${tableIdOrName}`)
        : of<IRecords<T>>({ records: [] })
      )
    )
  }

  getBaseByName(baseName: string): Observable<IBase | undefined> {
    return this.http.get<IBase[]>(`https://api.airtable.com/v0/meta/bases`)
      .pipe(
        map(bases => bases.find(base => base.name === baseName))
      )
  }
}
