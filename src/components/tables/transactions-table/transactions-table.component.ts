import { CommonModule } from '@angular/common';
import { Component, computed, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AirtableService } from '../../../services/airtable.service';
import { ITransaction } from '../../../models/Transactions';

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './transactions-table.component.html',
})
export class TransactionsTableComponent {
  transactionsPaginator = viewChild.required(MatPaginator);
  transactionsDataSource = computed(() => {
    var dataSource = new MatTableDataSource<ITransaction>();
    dataSource.paginator = this.transactionsPaginator();
    dataSource.data = this.airtableService.transactions();
    return dataSource;
  });

  displayedTransactionColumns: Partial<keyof ITransaction>[] = [
    "date",
    "description",
    "amount",
    "account",
  ]
  readonly TransactionColumns: Record<keyof ITransaction, keyof ITransaction> = {
    id: "id",
    category: "category",
    date: "date",
    description: "description",
    amount: "amount",
    account: "account",
  }

  constructor(
    protected airtableService: AirtableService,
  ) { }
}
