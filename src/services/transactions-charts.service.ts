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
  private dateLabels = computed(this.getDateLabels.bind(this));
  private categoryLabels = computed(this.getCategoryLabels.bind(this));
  balanceAndProjectedBalanceLineChartDatasets = computed(this.getBalanceAndProjectedBalanceLineChartDatasets.bind(this));
  categoryCountsRadarChartDataset = computed(this.getCategoryCountsRadarChartDataset.bind(this));
  categoryTotalsRadarChartDataset = computed(this.getCategoryTotalsRadarChartDataset.bind(this));
  categoryTotalsBarChartDataset = computed(this.getCategoryTotalsBarChartDataset.bind(this));
  projectedCategoryTotalsBarChartDataset = computed(this.getProjectedCategoryTotalsBarChartDataset.bind(this));

  constructor(
    private transactionService: TransactionService,
  ) { }

  private getChartDataTemplate<T>(): ChartData<keyof ChartTypeRegistry, T[], string> {
    return {
      labels: [],
      datasets: []
    }
  }

  getLineChartOptions(chartTitle: string, xAxisTitle: string, yAxisTitle: string): ChartOptions<keyof ChartTypeRegistry> {
    return {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: yAxisTitle
          },
        },
        x: {
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

  getBarChartOptions(chartTitle: string): ChartOptions<keyof ChartTypeRegistry> {
    return {
      plugins: {
        title: {
          display: true,
          text: chartTitle
        }
      }
    }
  }

  getDateLabels(): DateTime[] {
    var startingDate = this.transactionService.startingDate();
    var endingDate = this.transactionService.endingDate();
    if (startingDate == null || endingDate == null) {
      return [];
    }
    var totalDaysInDateRange = endingDate.diff(startingDate, 'days').days;
    var labels = Array.from({ length: totalDaysInDateRange + 1 }, (_, i) => startingDate!.plus({ days: i }).startOf('day'));
    return labels;
  }

  getCategoryLabels(): string[] {
    var balances = this.transactionService.balances();
    var projectedBalances = this.transactionService.projectedBalances();
    if (balances == null || projectedBalances == null) {
      return [];
    }
    var both = balances.concat(projectedBalances);
    return ARRAY.distinct(both.flatMap(b => b.transactions.map(t => t.category)));
  }

  getBalanceAndProjectedBalanceLineChartDatasets(): ChartData<keyof ChartTypeRegistry, (number | null)[], string> {
    var chartDataset = this.getChartDataTemplate<(number | null)>();
    var startingDate = this.transactionService.startingDate();
    var endingDate = this.transactionService.endingDate();
    var balances = this.transactionService.balances();
    var projectedBalances = this.transactionService.projectedBalances();
    if (balances == null || projectedBalances == null || startingDate == null || endingDate == null) {
      return chartDataset;
    }
    var dateLabels = this.dateLabels();
    chartDataset.labels = dateLabels.map(date => date.toISODate()!);
    var balancesChartData = this.getBalanceAndProjectedBalanceData(balances, dateLabels, true);
    var projectedBalancesChartData = this.getBalanceAndProjectedBalanceData(projectedBalances, dateLabels);
    chartDataset.datasets.push({
      label: "Balance",
      data: balancesChartData,
      type: "line",
      tension: 0.3,
      pointStyle: false,
      borderWidth: 1,
    })
    chartDataset.datasets.push({
      label: "Projected Balance",
      data: projectedBalancesChartData,
      type: "line",
      tension: 0.3,
      pointStyle: false,
      borderWidth: 1,
    });
    return chartDataset;
  }

  private getBalanceAndProjectedBalanceData(balances: IBalance[], dateLabels: DateTime[], isActualBalance = false) {
    var now = DateTime.now();
    var chartData = dateLabels.reduce<(number | null)[]>((accumulator, dateLabel) => {
      var isAfterNow = dateLabel.diff(now, 'days').days > 0;
      if (isAfterNow && isActualBalance) {
        accumulator.push(null);
        return accumulator;
      }
      var balanceOnThisDate = balances.find(b => b.date.diff(dateLabel, 'days').days === 0);
      if (balanceOnThisDate) {
        accumulator.push(Math.ceil(balanceOnThisDate.balance));
        return accumulator;
      }
      if (accumulator.length === 0) {
        accumulator.push(null);
        return accumulator;
      }
      accumulator.push(accumulator[accumulator.length - 1]);
      return accumulator;
    }, [] as number[]);
    return chartData;
  }

  getCategoryCountsRadarChartDataset(): ChartData<keyof ChartTypeRegistry, (number)[], string> {
    var chartDataset = this.getChartDataTemplate<number>();
    var startingDate = this.transactionService.startingDate();
    var endingDate = this.transactionService.endingDate();
    var balances = this.transactionService.balances();
    var projectedBalances = this.transactionService.projectedBalances();
    if (balances == null || projectedBalances == null || startingDate == null || endingDate == null) {
      return chartDataset;
    }
    var labels = this.categoryLabels();
    chartDataset.labels = labels;
    var balancesCategoriesChartData = this.getCategoryCountsRadarChartData(balances, labels);
    var projectedBalancesCategoriesChartData = this.getCategoryCountsRadarChartData(projectedBalances, labels);
    chartDataset.datasets.push({
      label: "Categories",
      data: balancesCategoriesChartData,
      type: "radar",
      fill: true,
    })
    chartDataset.datasets.push({
      label: "Projected Categories",
      data: projectedBalancesCategoriesChartData,
      type: "radar",
      fill: true,
    });
    return chartDataset;
  }

  getCategoryTotalsRadarChartDataset(): ChartData<keyof ChartTypeRegistry, (number)[], string> {
    var chartDataset = this.getChartDataTemplate<number>();
    var startingDate = this.transactionService.startingDate();
    var endingDate = this.transactionService.endingDate();
    var balances = this.transactionService.balances();
    var projectedBalances = this.transactionService.projectedBalances();
    if (balances == null || projectedBalances == null || startingDate == null || endingDate == null) {
      return chartDataset;
    }
    var labels = this.categoryLabels();
    chartDataset.labels = labels;
    var balancesCategoriesChartData = this.getCategoryTotalsRadarChartData(balances, labels);
    var projectedBalancesCategoriesChartData = this.getCategoryTotalsRadarChartData(projectedBalances, labels);
    chartDataset.datasets.push({
      label: "Categories",
      data: balancesCategoriesChartData,
      type: "radar",
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
    })
    chartDataset.datasets.push({
      label: "Projected Categories",
      data: projectedBalancesCategoriesChartData,
      type: "radar",
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
    });
    chartDataset.datasets.push({
      label: "Zero",
      data: balancesCategoriesChartData.map(() => 0),
      type: "radar",
      fill: false,
      borderColor: 'rgb(0, 0, 0)',
    })
    return chartDataset;
  }

  getCategoryTotalsBarChartDataset(): ChartData<keyof ChartTypeRegistry, (number)[], string> {
    var balances = this.transactionService.balances();
    return this.getTotalsBarChartDataset(balances, "Categories");
  }

  getProjectedCategoryTotalsBarChartDataset(): ChartData<keyof ChartTypeRegistry, (number)[], string> {
    var balances = this.transactionService.projectedBalances();
    return this.getTotalsBarChartDataset(balances, "Projected Categories");
  }

  getTotalsBarChartDataset(balances: IBalance[], dataTitle: string): ChartData<keyof ChartTypeRegistry, number[], string> {
    var chartDataset = this.getChartDataTemplate<number>();
    var startingDate = this.transactionService.startingDate();
    var endingDate = this.transactionService.endingDate();
    if (balances == null || startingDate == null || endingDate == null) {
      return chartDataset;
    }
    var labels = this.categoryLabels();
    var data = this.getCategoryTotalsRadarChartData(balances, labels).sort((a, b) => a - b);
    var chartDataset = this.getChartDataTemplate<number>();
    chartDataset.labels = labels;
    chartDataset.datasets.push({
      label: dataTitle,
      data: data,
      type: "bar",
    })
    return chartDataset;
  }

  getCategoryCountsRadarChartData(balances: IBalance[], labels: string[]): number[] {
    var categories = balances.flatMap(b => b.transactions.map(t => t.category));
    var counts = labels.map(label => categories.filter(c => c === label).length);
    return counts;
  }

  getCategoryTotalsRadarChartData(balances: IBalance[], labels: string[]): number[] {
    var amounts = balances.flatMap(b => b.transactions.map(t => ({ category: t.category, amount: t.amount })));
    var counts = labels.map(label => amounts.filter(amount => amount.category === label).reduce((acc, amount) => acc + amount.amount, 0));
    return counts;
  }
}
