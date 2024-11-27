import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, input, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Transaction } from 'models/Transactions';
import { TransactionService } from 'services/transactions.service';
import { DateTimePipe } from 'common/angular/pipes/datetime.pipe';
import { TransactionsStyleService } from 'services/styles/transactions-style.service';
import { AccountStylesService } from 'services/styles/account-styles';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    CurrencyPipe,
    DateTimePipe,
    MatSortModule,
  ],
  templateUrl: './transactions-table.component.html',
})
export class TransactionsTableComponent {
  transactions = input.required<Transaction[]>()
  transactionsPaginator = viewChild.required(MatPaginator);
  transactionsDataSource = computed(() => {
    var dataSource = new MatTableDataSource<Transaction>();
    dataSource.paginator = this.transactionsPaginator();
    dataSource.data = this.transactions();
    return dataSource;
  });

  readonly TransactionColumns = {
    id: "id",
    category: "category",
    date: "date",
    sortOrder: "sortOrder",
    description: "description",
    amount: "amount",
    accountName: "accountName",
    accountType: "accountType",
    startingBalance: "startingBalance",
    // account columns
  }
  displayedTransactionColumns = [
    // this.TransactionColumns.id,
    this.TransactionColumns.date,
    this.TransactionColumns.sortOrder,
    // "category",
    this.TransactionColumns.accountName,
    this.TransactionColumns.accountType,
    this.TransactionColumns.description,
    this.TransactionColumns.amount,
    this.TransactionColumns.startingBalance,
  ]

  constructor(
    protected transactionsService: TransactionService,
    protected transactionsStyleService: TransactionsStyleService,
    protected accountStyleService: AccountStylesService,
  ) { }
}
