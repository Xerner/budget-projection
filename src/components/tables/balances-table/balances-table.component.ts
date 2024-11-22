import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, signal, viewChild } from '@angular/core';
import { TransactionService } from '../../../services/transactions.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IBalanceOnDate } from '../../../models/interfaces/IPlannedTransactions';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { BalanceOnDayTableComponent } from '../balance-on-day-table/balance-on-day-table.component';
import { DateTimePipe } from 'common/angular/pipes/datetime.pipe';

@Component({
  selector: 'app-balances-table',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    CurrencyPipe,
    BalanceOnDayTableComponent,
    MatMenuModule,
    MatMenuTrigger,
    MatButtonModule,
    DateTimePipe,
],
  templateUrl: './balances-table.component.html',
})
export class BalancesTableComponent {
  balancesPaginator = viewChild.required(MatPaginator);
  balancesDataSource = computed(() => {
    var dataSource = new MatTableDataSource<IBalanceOnDate>();
    dataSource.paginator = this.balancesPaginator();
    dataSource.data = this.transactionsService.allBalances();
    return dataSource;
  });
  selectedBalance = signal<IBalanceOnDate | null>(null);

  constructor(
    protected transactionsService: TransactionService
  ) { }

  displayedBalanceColumns: Partial<keyof IBalanceOnDate>[] = [
    "date",
    "balance",
    "isProjected",
    "transactions",
  ]
  BalanceColumns: Record<keyof IBalanceOnDate, keyof IBalanceOnDate> = {
    date: "date",
    balance: "balance",
    transactions: "transactions",
    isProjected: "isProjected",
    previousBalance: "previousBalance",
  }

  selectBalance(balance: IBalanceOnDate) {
    this.selectedBalance.set(balance);
  }
}
