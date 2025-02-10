import { Inject, Injectable, signal, WritableSignal } from '@angular/core';
import { RecordsApiService } from './api/records.api.service';
import { BasesApiService } from './api/bases.api.service';
import { InputsService } from './inputs.service';
import { IGlobalQueryParams } from '../models/GlobalQueryParams';
import { AUTH_TOKEN_SERVICE, IAuthTokenService } from '../common/angular/interceptors';
import { FormControl } from '@angular/forms';
import { AirtableBase, AirtableBaseSchemaExt, AirtablePlannedTransaction, AirtableTransaction, IField, IFields, IRecord, IRecords } from '../models/api/airtable';
import { AirtableAccount } from 'models/api/airtable/Accounts';
import { AirtablePlannedTransactionDateFilter } from 'models/api/airtable/PlannedTransactionDateFilters';
import { forkJoin, Observable, of } from 'rxjs';
import { LoadingService } from 'common/angular/services/loading';

@Injectable({ providedIn: 'root' })
export class AirtableService {
  bases = signal<AirtableBase[]>([]);
  baseSchema = signal<AirtableBaseSchemaExt | null>(null);
  accounts = signal<AirtableAccount[]>([]);
  transactions = signal<AirtableTransaction[]>([]);
  plannedTransactions = signal<AirtablePlannedTransaction[]>([]);
  plannedTransactionDateFilters = signal<AirtablePlannedTransactionDateFilter[]>([]);

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
      this.fetchBaseSchema(baseId)?.subscribe();
    },
  };

  constructor(
    private inputsService: InputsService,
    private basesApi: BasesApiService,
    private recordsApi: RecordsApiService,
    @Inject(AUTH_TOKEN_SERVICE) private tokenService: IAuthTokenService,
    private loadingService: LoadingService,

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
    var dateFiltersTableName = this.inputsService.apiForm.controls.dateFiltersTableName.value;
    var loadingItem = this.loadingService.start('Fetching all data');
    forkJoin([
      this.fetchPlannedTransactions(base.id, plannedTransactionsTableName),
      this.fetchTransactions(base.id, transactionsTableName),
      this.fetchAccounts(base.id, accountsTableName),
      this.fetchPlannedTransactionDateFilters(base.id, dateFiltersTableName),
    ]).subscribe({
      complete: () => {
        this.loadingService.stop(loadingItem);
      }
    });
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
    return new Observable(observer => this.basesApi.getBaseSchema(baseId).subscribe(schemaResponse => {
      this.baseSchema.set(schemaResponse);
      observer.next(schemaResponse);
      observer.complete();
    }));
  }

  fetchTransactions(baseId: string, tableName: string) {
    return this.fetchRecords<AirtableTransaction>(baseId, tableName, this.transactions);
  }

  fetchPlannedTransactions(baseId: string, tableName: string) {
    return this.fetchRecords<AirtablePlannedTransaction>(baseId, tableName, this.plannedTransactions);
  }

  fetchAccounts(baseId: string, tableName: string) {
    return this.fetchRecords<AirtableAccount>(baseId, tableName, this.accounts);
  }

  fetchPlannedTransactionDateFilters(baseId: string, tableName: string) {
    return this.fetchRecords<AirtablePlannedTransactionDateFilter>(baseId, tableName, this.plannedTransactionDateFilters);
  }

  fetchRecords<TRecord extends IRecord>(baseId: string, tableName: string, signal: WritableSignal<TRecord[]>): Observable<TRecord[]> {
    if (!baseId || !tableName) {
      return of();
    }
    var mappedRecords: TRecord[] = [];
    return new Observable(observer => this.recordsApi.getRecords<TRecord>(baseId, tableName).subscribe({
      next: recordsResponse => {
        mappedRecords = mappedRecords.concat(recordsResponse.records);
        observer.next(mappedRecords);
      },
      complete: () => {
        signal.set(mappedRecords);
        observer.complete();
      }
    }));
  }
}
