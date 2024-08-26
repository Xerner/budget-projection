import { Injectable } from '@angular/core';
import { AirtableApiService } from './airtable-api.service';
import { IPlannedTransaction } from '../interfaces/airtable/ITransaction';
import { InputsService } from './inputs.service';
import { QueryParamKey } from '../stores/query-params.store';
import { ITransaction } from '../interfaces/ITransaction';

export const TRANSACTIONS_TABLE_NAME = 'Transactions';
export const PLANNED_TRANSACTIONS_TABLE_NAME = 'Bills';

@Injectable({ providedIn: 'root' })
export class BudgetService {
  constructor(
    private airtableApiService: AirtableApiService,
    private inputsService: InputsService,
  ) { }

  getTransactions() {
    var baseName = this.inputsService.form.controls[QueryParamKey.baseName].value;
    if (!baseName) {
      return;
    }
    return this.airtableApiService.getRecords<IPlannedTransaction>(baseName, TRANSACTIONS_TABLE_NAME);
  }

  getPlannedTransactions() {
    var baseName = this.inputsService.form.controls[QueryParamKey.baseName].value;
    if (!baseName) {
      return;
    }
    return this.airtableApiService.getRecords<IPlannedTransaction>(baseName, PLANNED_TRANSACTIONS_TABLE_NAME);
  }

  getProjectedPlannedTransactions(plannedTransactions: IPlannedTransaction[]): ITransaction[] {
    return plannedTransactions
      .filter(plannedTransaction => plannedTransaction.fields.Active)
      .map(plannedTransaction => {
        return {
          category: plannedTransaction.fields.Category,
          description: plannedTransaction.fields.Description,
          account: plannedTransaction.fields.Account,
          date: '',
          amount: plannedTransaction.fields.Monthly,
        };
    });
  }
}
