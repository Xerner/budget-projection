import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DateTimePipe } from 'common/angular/pipes';
import { AccountSummary } from 'models/AccountSummary';
import { AccountChartsService } from 'services/charts/accounts-charts.service';
import { AccountStylesService } from 'services/styles/account-styles';

@Component({
  selector: 'app-accounts-summaries-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    CurrencyPipe,
    DateTimePipe,
  ],
  templateUrl: './accounts-summaries-table.component.html',
})
export class AccountsSummariesTableComponent {
  accountSummariesDataSource = computed(() => {
    var dataSource = new MatTableDataSource<AccountSummary>();
    dataSource.data = this.accountsChartsService.accountSummaries();
    return dataSource;
  });

  constructor(
    protected accountsChartsService: AccountChartsService,
    protected accountStyles: AccountStylesService,
  ) { }

  readonly AccountSummaryColumns = {
    name: "name",
    type: "type",
    lastDate: "lastDate",
    startingBalance: "startingBalance",
    currentBalance: "currentBalance",
    // income: "income",
    // expense: "expense",
    projectedBalance: "projectedBalance",
  }
  displayedAccountSummaryColumns = [
    this.AccountSummaryColumns.name,
    this.AccountSummaryColumns.type,
    this.AccountSummaryColumns.startingBalance,
    this.AccountSummaryColumns.currentBalance,
    this.AccountSummaryColumns.lastDate,
    // this.AccountSummaryColumns.income,
    // this.AccountSummaryColumns.expense,
    this.AccountSummaryColumns.projectedBalance,
  ]

  getTotalStartingBalance() {
    return this.accountSummariesDataSource().data.reduce((accumulator, accountSummary) => accumulator + accountSummary.startingBalance, 0);
  }
}
