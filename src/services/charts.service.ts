import { Injectable } from '@angular/core';
import { ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
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

  getProjectedChartData(): ChartData<keyof ChartTypeRegistry, number[], string> {
    var data = this.openPullRequests();
    var chartDataset = this.dashboardService.getChartDataTemplate<number>("Count");
    if (data == null) {
      return chartDataset;
    }
    var ageDataCounts: [number, number][] = []
    data.forEach(pullRequest => {
      var age = this.dashboardService.getAge(pullRequest.created_on)
      var ageCount = ageDataCounts.find(ageCount_ => ageCount_[0] == age)
      if (ageCount == undefined) {
        ageCount = [age, 0]
        ageDataCounts.push(ageCount);
      }
      ageCount[1]++;
      return ageCount;
    })
    ageDataCounts.sort((ageCount1, ageCount2) => ageCount1[0] < ageCount2[0] ? -1 : 1);
    var largestAge = Math.max(...ageDataCounts.map(data => data[0]));
    var labels = this.dashboardService.getLabels(largestAge + 1, this.MIN_LABEL_COUNT);
    var chartData = new Array<number>(labels.length).fill(0).map((_, i) => {
      var ageCount = ageDataCounts.find(ageCount => ageCount[0] == i)
      if (ageCount == undefined) {
        return 0;
      }
      return ageCount[1];
    })
    chartDataset.datasets[0].data = chartData;
    chartDataset.labels = labels.map(i => i.toString());
    return chartDataset;
  }
}
