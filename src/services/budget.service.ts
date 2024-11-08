import { ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { Injectable, signal } from '@angular/core';
import { IPlannedTransaction } from '../models/airtable/ITransaction';
import { InputsService } from './inputs.service';
import { ITransaction } from '../models/ITransaction';
import { DateTime } from 'luxon';
import { AirtableService } from './airtable.service';
import { forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BudgetService {
  startingBalance = signal<number | null>(0);
  startingDate = signal<DateTime | null>(DateTime.now());

  constructor(
    private inputsService: InputsService,
    private airtableService: AirtableService,
  ) {
    this.inputsService.dashboardForm.controls.startingBalance.valueChanges.subscribe(value => {
      this.startingBalance.set(value);
    });
    this.inputsService.dashboardForm.controls.startingDate.valueChanges.subscribe(date => {
      this.startingDate.set(date);
    });
  }

  fetchAll() {
    var baseId = this.inputsService.apiForm.controls.baseName.value;
    var transactionsTableName = this.inputsService.apiForm.controls.transactionTableName.value;
    var plannedTransactionsTableName = this.inputsService.apiForm.controls.plannedTransactionTableName.value;
    this.airtableService.fetchRecords<IPlannedTransaction>(baseId, plannedTransactionsTableName);
    this.airtableService.fetchRecords<ITransaction>(baseId, transactionsTableName);
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
