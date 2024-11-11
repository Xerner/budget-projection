import { ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { Injectable, signal } from '@angular/core';
import { InputsService } from './inputs.service';
import { Transaction } from '../models/records/ITransaction';
import { DateTime } from 'luxon';
import { AirtableService } from './airtable.service';
import { PlannedTransaction } from '../models/records/IPlannedTransaction';

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
    var base = this.airtableService.bases().find(base => base.name === this.inputsService.apiForm.controls.baseName.value);
    if (base === undefined) {
      return;
    }
    var transactionsTableName = this.inputsService.apiForm.controls.transactionTableName.value;
    var plannedTransactionsTableName = this.inputsService.apiForm.controls.plannedTransactionTableName.value;
    this.airtableService.fetchRecords<PlannedTransaction>(base.id, plannedTransactionsTableName);
    this.airtableService.fetchRecords<Transaction>(base.id, transactionsTableName);
  }

  getProjectedPlannedTransactions(plannedTransactions: PlannedTransaction[]): Transaction[] {
    return plannedTransactions
      .filter(plannedTransaction => plannedTransaction.Active)
      .map(plannedTransaction => {
        return {
          Category: plannedTransaction.Category,
          Description: plannedTransaction.Description,
          Account: plannedTransaction.Account,
          Date: plannedTransaction['Date Of Transaction'],
          Amount: plannedTransaction.Amount,
          "Running Balance": 0,
        };
    });
  }

  getProjectedPlannedTransactionsChartData(plannedTransactions: PlannedTransaction[]) {
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
