import { Injectable } from '@angular/core';
import { AirtableService } from './airtable.service';
import { IRecordsExt } from '../models/airtable/api/IRecords';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  
  constructor(
    private airtableService: AirtableService,
  ) { }

  getData<T>(tableName: string): IRecordsExt<T> | null {
    var recordsSignal = this.airtableService.records.find(record => record().tableIdOrName === tableName);
    if (!recordsSignal) {
      return null;
    }
    return recordsSignal() ?? null;
  }
}