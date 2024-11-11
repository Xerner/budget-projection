import { Injectable } from '@angular/core';
import { AirtableService } from './airtable.service';
import { IFields } from '../models/airtable/api/IFields';
import { IRecord } from '../models/airtable/api/IRecord';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(
    private airtableService: AirtableService,
  ) { }

  getRecordsOrEmpty<TFields extends IFields = IFields>(tableName: string): IRecord<TFields>[] {
    var records = this.airtableService.records().find(record => record.tableIdOrName === tableName);
    return records ? records.records : [];
  }
}
