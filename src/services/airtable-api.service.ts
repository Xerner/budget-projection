import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AirtableApiService {
  readonly BASE_URL = "https://api.bitbucket.org/2.0/"
  readonly REPOSITORIES_URL = this.BASE_URL + "repositories"

  constructor(
    private http: HttpClient
  ) { }

  getRecords(baseId: string, tableIdOrName: string) {
    return this.http.get(`https://api.airtable.com/v0/${baseId}/${tableIdOrName}`)
  }
}
