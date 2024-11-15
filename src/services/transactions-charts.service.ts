import { computed, Injectable } from '@angular/core';
import { ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { TransactionService } from './transactions.service';
import { ARRAY } from '../common/library';
import { IBalance } from '../models/Transactions';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class TransactionsChartsService {
  private dateLabels = computed(() => {
    var startingDate = this.transactionService.startingDate();
    var endingDate = this.transactionService.endingDate();
    if (startingDate == null || endingDate == null) {
      return [];
    }
    var totalDaysInDateRange = endingDate.diff(startingDate, 'days').days;
    var labels = Array.from({ length: totalDaysInDateRange + 1 }, (_, i) => startingDate!.plus({ days: i }).startOf('day'));
    return labels;
  });
  chartDatasets = computed(this.getChartDatasets.bind(this));

  constructor(
    private transactionService: TransactionService,
  ) { }

  private getChartDataTemplate<T>(datasetLabel: string): ChartData<keyof ChartTypeRegistry, T[], string> {
    return {
      labels: [],
      datasets: []
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
          },
          ticks: {
            stepSize: 1,
            precision: 0
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

  getChartDatasets(): ChartData<keyof ChartTypeRegistry, number[], string> {
    var chartDataset = this.getChartDataTemplate<number>("Balance");
    var startingDate = this.transactionService.startingDate();
    var endingDate = this.transactionService.endingDate();
    var balances = this.transactionService.balances();
    var projectedBalances = this.transactionService.projectedBalances();
    if (balances == null || projectedBalances == null || startingDate == null || endingDate == null) {
      return chartDataset;
    }
    var dateLabels = this.dateLabels();
    chartDataset.labels = dateLabels.map(date => date.toISODate()!);
    var balancesChartData = this.getChartData(balances, dateLabels);
    var projectedBalancesChartData = this.getChartData(projectedBalances, dateLabels);
    chartDataset.datasets.push({
      label: "Balance",
      data: balancesChartData,
      type: "line",
      borderWidth: 1,
    })
    chartDataset.datasets.push({
      label: "Projected Balance",
      data: projectedBalancesChartData,
      type: "line",
      borderWidth: 1,
    });
    return chartDataset;
  }

  private getChartData(balances: IBalance[], dateLabels: DateTime[]) {
    var chartData = dateLabels.reduce<number[]>((accumulator, dateLabel) => {
      var balanceOnThisDate = balances.find(b => b.date.diff(dateLabel, 'days').days === 0);
      if (balanceOnThisDate != null) {
        accumulator.push(balanceOnThisDate.balance);
        return accumulator;
      }
      accumulator.push(accumulator[accumulator.length - 1]);
      return accumulator;
    }, [] as number[]);
    return chartData;
  }
}
