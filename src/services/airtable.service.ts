import { Inject, Injectable, signal } from '@angular/core';
import { RecordsApiService } from './api/records.api.service';
import { BasesApiService } from './api/bases.api.service';
import { InputsService } from './inputs.service';
import { IGlobalQueryParams } from '../models/query-param-keys';
import { TOKEN_SERVICE, ITokenService } from '../common/angular/interceptors';
import { FormControl } from '@angular/forms';
import { IBase, IBaseSchemaExt, ApiPlannedTransaction, IRecordsExt, ApiTransaction } from '../models/airtable/api';
import { IPlannedTransaction, ITransaction } from '../models/Transactions';
import { DateTime } from 'luxon';
import { Occurence } from '../models/IOccurences';

@Injectable({ providedIn: 'root' })
export class AirtableService {
  bases = signal<IBase[]>([]);
  baseSchema = signal<IBaseSchemaExt | null>(null);
  transactions = signal<ITransaction[]>([]);
  plannedTransactions = signal<IPlannedTransaction[]>([]);

  onApiControlChanges: Record<keyof IGlobalQueryParams, (value: any) => void> = {
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
    transactionTableName: (_) => null,
    plannedTransactionTableName: (_) => null,
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
    control.valueChanges.subscribe(this.onApiControlChanges[key].bind(this));
  }

  fetchAll() {
    var base = this.bases().find(base => base.name === this.inputsService.apiForm.controls.baseName.value);
    if (base === undefined) {
      return;
    }
    var transactionsTableName = this.inputsService.apiForm.controls.transactionTableName.value;
    var plannedTransactionsTableName = this.inputsService.apiForm.controls.plannedTransactionTableName.value;
    this.fetchPlannedTransactions(base.id, plannedTransactionsTableName);
    this.fetchTransactions(base.id, transactionsTableName);
  }

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

  fetchTransactions(baseId: string, tableName: string) {
    if (!baseId || !tableName) {
      return;
    }
    this.recordsApi.getRecords<ApiTransaction>(baseId, tableName).subscribe(recordsResponse => {
      var mapped = recordsResponse.records.map<ITransaction>(record => ({
        id: record.id,
        date: DateTime.fromISO(record.fields.Date),
        description: record.fields.Description,
        category: record.fields.Category,
        amount: record.fields.Amount,
        account: record.fields.Account,
        runningBalance: record.fields["Running Balance"],
      }));
      this.transactions.set(mapped)
    });
  }

  fetchPlannedTransactions(baseId: string, tableName: string) {
    if (!baseId || !tableName) {
      return;
    }
    this.recordsApi.getRecords<ApiPlannedTransaction>(baseId, tableName).subscribe(recordsResponse => {
      var mapped = recordsResponse.records.map<IPlannedTransaction>(record => ({
        id: record.id,
        description: record.fields.Description,
        active: record.fields.Active,
        amount: record.fields.Amount,
        priority: record.fields.Priority,
        category: record.fields.Category,
        isIncome: record.fields.IsIncome,
        account: record.fields.Account,
        occurrence: record.fields.Occurence as Occurence,
        autopay: record.fields.Autopay,
        shared: record.fields.Shared,
        dateOfTransaction: DateTime.fromISO(record.fields["Date of Transaction"]),
      }));
      this.plannedTransactions.set(mapped)
    });
  }
}
