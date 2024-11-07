import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { RecordsApiService } from './records.api.service';
import { BasesApiService } from './bases.api.service';
import { IBaseSchemaExt } from '../../models/airtable/api/IBaseSchema';
import { IRecordsExt } from '../../models/airtable/api/IRecords';
import { IBase } from '../../models/airtable/api/IBase';

@Injectable({ providedIn: 'root' })
export class AirtableService {
  bases = signal<IBase[]>([]);
  private _baseSchemas: WritableSignal<IBaseSchemaExt>[] = [];
  private _records: WritableSignal<IRecordsExt<any>>[] = [];
  /** base name to schema */
  baseSchemas: Signal<IBaseSchemaExt>[] = this._baseSchemas;
  /** table name to records */
  records: Signal<IRecordsExt<any>>[] = this._records

  api = {
    bases: this.basesApi,
    records: this.recordsApi,
  }

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
      var baseSchema = this._baseSchemas.find(schema => schema().baseId === baseId);
      if (baseSchema === undefined) {
        this._baseSchemas.push(signal(schemaResponse));
        return;
      }
      baseSchema.set(schemaResponse);
    });
  }

  fetchRecords<T>(baseId: string, tableIdOrName: string) {
    if (!baseId || !tableIdOrName) {
      return;
    }
    this.recordsApi.getRecords<T>(baseId, tableIdOrName).subscribe(recordsResponse => {
      var records = this._records.find(records => records().baseId === baseId && records().tableIdOrName === tableIdOrName);
      if (records === undefined) {
        this._records.push(signal(recordsResponse));
        return;
      }
      records.set(recordsResponse);
    });
  }
}
