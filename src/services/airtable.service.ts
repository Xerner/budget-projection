import { Inject, Injectable, signal } from '@angular/core';
import { RecordsApiService } from './api/records.api.service';
import { BasesApiService } from './api/bases.api.service';
import { InputsService } from './inputs.service';
import { IGlobalQueryParams } from '../models/GlobalQueryParams';
import { TOKEN_SERVICE, ITokenService } from '../common/angular/interceptors';
import { FormControl } from '@angular/forms';
import { AirtableBase, AirtableBaseSchemaExt, AirtablePlannedTransaction, AirtableTransaction } from '../models/airtable/api';
import { AirtableAccount } from 'models/airtable/api/Accounts';

@Injectable({ providedIn: 'root' })
export class AirtableService {
  bases = signal<AirtableBase[]>([]);
  baseSchema = signal<AirtableBaseSchemaExt | null>(null);
  transactions = signal<AirtableTransaction[]>([]);
  plannedTransactions = signal<AirtablePlannedTransaction[]>([]);
  accounts = signal<AirtableAccount[]>([]);

  onApiControlChanges: Partial<Record<keyof IGlobalQueryParams, (value: any) => void>> = {

    token: (token) => {
      this.tokenService.setToken(token);
      this.fetchBases();
    },
    baseName: (baseName) => {
      var baseId = this.bases().find(base => base.name === baseName)?.id;
      if (baseId == undefined) {
        this.baseSchema.set(null);
        return;
      }
      this.fetchBaseSchema(baseId)
    },
  };

  constructor(
    private inputsService: InputsService,
    private basesApi: BasesApiService,
    private recordsApi: RecordsApiService,
    @Inject(TOKEN_SERVICE) private tokenService: ITokenService,
  ) {
    for (const key in this.inputsService.apiForm.controls) {
      var control = this.inputsService.apiForm.controls[key as keyof typeof this.inputsService.apiForm.controls];
      var name = this.inputsService.getControlName(control) as keyof IGlobalQueryParams;
      this.subscribeToSpecificValueChanges(control, name);
    }
  }

  private subscribeToSpecificValueChanges(control: FormControl, key: keyof IGlobalQueryParams) {
    control.valueChanges.subscribe(this.onApiControlChanges[key]?.bind(this));
  }

  fetchAll() {
    var base = this.bases().find(base => base.name === this.inputsService.apiForm.controls.baseName.value);
    if (base === undefined) {
      return;
    }
    var transactionsTableName = this.inputsService.apiForm.controls.transactionTableName.value;
    var plannedTransactionsTableName = this.inputsService.apiForm.controls.plannedTransactionTableName.value;
    var accountsTableName = this.inputsService.apiForm.controls.accountsTableName.value;
    this.fetchPlannedTransactions(base.id, plannedTransactionsTableName);
    this.fetchTransactions(base.id, transactionsTableName);
    this.fetchAccounts(base.id, accountsTableName);
  }

  fetchBases() {
    this.basesApi.getBases().subscribe(response => {
      this.bases.set(response.bases);
      var baseNameControlValue = this.inputsService.apiForm.controls.baseName.value;
      if (!baseNameControlValue) {
        return;
      }
      this.onApiControlChanges.baseName!(baseNameControlValue);
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

  fetchTransactions(baseId: string, tableName: string) {
    if (!baseId || !tableName) {
      return;
    }
    var records: AirtableTransaction[] = [];
    this.recordsApi.getRecords<AirtableTransaction>(baseId, tableName).subscribe({
      next: recordsResponse => {
        records = records.concat(recordsResponse.records.map(record => record.fields));
      },
      complete: () => {
        this.transactions.set(records)
      }
    });
  }

  fetchPlannedTransactions(baseId: string, tableName: string) {
    if (!baseId || !tableName) {
      return;
    }
    var mappedRecords: AirtablePlannedTransaction[] = [];
    this.recordsApi.getRecords<AirtablePlannedTransaction>(baseId, tableName).subscribe({
      next: recordsResponse => {
        mappedRecords = mappedRecords.concat(recordsResponse.records.map(record => record.fields));
      },
      complete: () => {
        this.plannedTransactions.set(mappedRecords)
      }
    });
  }

  fetchAccounts(baseId: string, tableName: string) {
    if (!baseId || !tableName) {
      return;
    }
    var mappedRecords: AirtableAccount[] = [];
    this.recordsApi.getRecords<AirtableAccount>(baseId, tableName).subscribe({
      next: recordsResponse => {
        mappedRecords = mappedRecords.concat(recordsResponse.records.map(record => record.fields));
      },
      complete: () => {
        this.accounts.set(mappedRecords)
      }
    });

  }
}
