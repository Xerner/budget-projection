import { ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { Injectable, signal } from '@angular/core';
import { AirtableService } from './airtable/airtable.service';
import { IPlannedTransaction } from '../models/airtable/ITransaction';
import { InputsService } from './inputs.service';
import { ITransaction } from '../models/ITransaction';
import { DateTime } from 'luxon';
import { map, Observable, of } from 'rxjs';
import { IRecordsExt } from '../models/airtable/api/IRecords';

export const TRANSACTIONS_TABLE_NAME = 'Transactions';
export const PLANNED_TRANSACTIONS_TABLE_NAME = 'Planned Transactions';

@Injectable({ providedIn: 'root' })
export class BudgetService {
  startingBalance = signal<number | null>(0);
  startingDate = signal<DateTime | null>(DateTime.now());

  constructor(
    private airtableService: AirtableService,
    private inputsService: InputsService,
  ) {
    this.inputsService.dashboardForm.controls.startingBalance.valueChanges.subscribe(value => {
      this.startingBalance.set(value);
    });
    this.inputsService.dashboardForm.controls.startingBalance.valueChanges.subscribe(date => {
      this.startingBalance.set(date);
    });
  }

  fetchTransactions(): Observable<IRecordsExt<ITransaction>> {
    var baseName = this.inputsService.apiForm.controls.baseName.value;
    if (!baseName) {
      return of();
    }
    return this.airtableService.api.records.getRecords<ITransaction>(baseName, TRANSACTIONS_TABLE_NAME)
  }

  getPlannedTransactions(): Observable<IPlannedTransaction[]> {
    var baseName = this.inputsService.apiForm.controls.baseName.value;
    if (!baseName) {
      return of([]);
    }
    return this.airtableService.api.records.getRecords<IPlannedTransaction>(baseName, PLANNED_TRANSACTIONS_TABLE_NAME)
      .pipe(map(response => response.records));
  }

  getProjectedPlannedTransactions(plannedTransactions: IPlannedTransaction[]): ITransaction[] {
    return plannedTransactions
      .filter(plannedTransaction => plannedTransaction.fields.Active)
      .map(plannedTransaction => {
        return {
          category: plannedTransaction.fields.Category,
          description: plannedTransaction.fields.Description,
          account: plannedTransaction.fields.Account,
          date: plannedTransaction.fields['Date Of Transaction'],
          amount: plannedTransaction.fields.Amount,
        };
    });
  }

  getProjectedPlannedTransactionsChartData(plannedTransactions: IPlannedTransaction[]) {
    var plannedTransactionsChartData = this.getChartDataTemplate<number>('Planned Transactions');
    // TODO: Implement this method
    return plannedTransactionsChartData;
  }

  getChartDataTemplate<T>(datasetLabel: string): ChartData<keyof ChartTypeRegistry, T[], string> {
    return {
      labels: [],
      datasets: [{
        label: datasetLabel,
        data: [],
        borderWidth: 1,
      }]
    }
  }

  getOptions(chartTitle: string, xAxisTitle: string, yAxisTitle: string): ChartOptions<keyof ChartTypeRegistry> {
    return {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: yAxisTitle
          }
        },
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: xAxisTitle
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: chartTitle
        }
      }
    }
  }
}
