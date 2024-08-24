import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AirtableApiService {
  readonly BASE_URL = "https://api.bitbucket.org/2.0/"
  readonly REPOSITORIES_URL = this.BASE_URL + "repositories"

  constructor() { }

  getRecords() {
    return fetch('https://api.airtable.com/v0/appXXXXXXXXX/table', {
      headers: {
        Authorization: 'Bearer key'
      }
    })
  }
}
