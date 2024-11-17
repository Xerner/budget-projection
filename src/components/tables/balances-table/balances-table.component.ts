import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, signal, viewChild } from '@angular/core';
import { TransactionService } from '../../../services/transactions.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IBalance } from '../../../models/Transactions';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { BalanceMenuComponent } from './balance-menu/balance-menu.component';

@Component({
  selector: 'app-balances-table',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    CurrencyPipe,
    BalanceMenuComponent,
    MatMenuModule,
    MatMenuTrigger,
    MatButtonModule,
],
  templateUrl: './balances-table.component.html',
})
export class BalancesTableComponent {
  balancesPaginator = viewChild.required(MatPaginator);
  balancesDataSource = computed(() => {
    var dataSource = new MatTableDataSource<IBalance>();
    dataSource.paginator = this.balancesPaginator();
    dataSource.data = this.transactionsService.allBalances();
    return dataSource;
  });
  selectedBalance = signal<IBalance | null>(null);

  constructor(
    protected transactionsService: TransactionService
  ) { }

  displayedBalanceColumns: Partial<keyof IBalance>[] = [
    "date",
    "balance",
    "transactions",
  ]
  BalanceColumns: Record<keyof IBalance, keyof IBalance> = {
    date: "date",
    balance: "balance",
    transactions: "transactions",
  }

  selectBalance(balance: IBalance) {
    this.selectedBalance.set(balance);
  }
}
