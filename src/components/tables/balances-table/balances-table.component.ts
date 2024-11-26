import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, input, signal, viewChild } from '@angular/core';
import { TransactionService } from '../../../services/transactions.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { BalanceOnDayTableComponent } from '../balance-on-day-table/balance-on-day-table.component';
import { DateTimePipe } from 'common/angular/pipes/datetime.pipe';
import { BalanceOnDate } from 'models/interfaces/IBalance';
import { BooleanPipe } from 'pipes/boolean.pipe';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule,
    DateTimePipe,
    BooleanPipe,
],
  templateUrl: './balances-table.component.html',
})
export class BalancesTableComponent {
  balances = input.required<BalanceOnDate[]>()
  balancesPaginator = viewChild.required(MatPaginator);
  balancesDataSource = computed(() => {
    var dataSource = new MatTableDataSource<BalanceOnDate>();
    dataSource.paginator = this.balancesPaginator();
    dataSource.data = this.balances();
    return dataSource;
  });
  selectedBalance = signal<BalanceOnDate | null>(null);

  constructor(
    protected transactionsService: TransactionService
  ) { }

  BalanceColumns = {
    date: "date",
    balance: "balance",
    transactions: "transactions",
    isProjected: "Has Projected",
    previousBalance: "previousBalance",
  }
  displayedBalanceColumns = [
    this.BalanceColumns.isProjected,
    this.BalanceColumns.date,
    this.BalanceColumns.balance,
    this.BalanceColumns.transactions,
  ]

  selectBalance(balance: BalanceOnDate) {
    this.selectedBalance.set(balance);
  }
}
