import { Injectable, signal } from '@angular/core';
import { RecordsApiService } from './api/records.api.service';
import { BasesApiService } from './api/bases.api.service';
import { IBaseSchemaExt } from '../models/airtable/api/IBaseSchema';
import { IRecordsExt } from '../models/airtable/api/IRecords';
import { IBase } from '../models/airtable/api/IBase';
import { IFields } from '../models/airtable/api/IFields';

@Injectable({ providedIn: 'root' })
export class AirtableService {
  bases = signal<IBase[]>([]);
  baseSchema = signal<IBaseSchemaExt | null>(null);
  records = signal<IRecordsExt<any>[]>([])

  constructor(
    private basesApi: BasesApiService,
    private recordsApi: RecordsApiService,
  ) { }

  fetchBases() {
    this.basesApi.getBases().subscribe(response => {
      this.bases.set(response.bases);
    });
  }

  fetchBaseSchema(baseId: string) {
    if (!baseId) {
      return;
    }
    this.basesApi.getBaseSchema(baseId).subscribe(schemaResponse => {
      this.baseSchema.set(schemaResponse);
    });
  }

  fetchRecords<T extends IFields>(baseId: string, tableIdOrName: string) {
    if (!baseId || !tableIdOrName) {
      return;
    }
    this.recordsApi.getRecords<T>(baseId, tableIdOrName).subscribe(recordsResponse => {
      var index = this.records().findIndex(record => record.tableIdOrName === tableIdOrName);
      if (index !== -1) {
        this.records.update(records_ => {
          records_[index] = recordsResponse;
          return records_;
        });
        return;
      }
      this.records.update(records_ => [...records_, recordsResponse]);
    });
  }
}
