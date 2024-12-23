import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, input, viewChild } from '@angular/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { PlannedTransaction } from 'models/PlannedTransaction';
import { BooleanPipe } from 'pipes/boolean.pipe';

@Component({
  selector: 'app-planned-transactions-table',
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    CurrencyPipe,
    BooleanPipe,
  ],
  templateUrl: './planned-transactions-table.component.html'
})
export class PlannedTransactionsTableComponent {
  transactions = input.required<PlannedTransaction[]>()
  plannedTransactionsPaginator = viewChild.required(MatPaginator);
  plannedTransactionsDataSource = computed(() => {
    var dataSource = new MatTableDataSource<PlannedTransaction>();
    dataSource.paginator = this.plannedTransactionsPaginator();
    dataSource.data = this.transactions();
    return dataSource;
  });

  PlannedTransactionColumns: Record<keyof PlannedTransaction, keyof PlannedTransaction> = {
    id: "id",
    description: "description",
    active: "active",
    amount: "amount",
    priority: "priority",
    category: "category",
    account: "account",
    occurrence: "occurrence",
    autopay: "autopay",
    bundledIn: "bundledIn",
    startingDate: "startingDate",
  }
  displayedPlannedTransactionColumns = [
    this.PlannedTransactionColumns.description,
    this.PlannedTransactionColumns.active,
    this.PlannedTransactionColumns.amount,
    this.PlannedTransactionColumns.priority,
    this.PlannedTransactionColumns.category,
    this.PlannedTransactionColumns.account,
    this.PlannedTransactionColumns.occurrence,
    this.PlannedTransactionColumns.autopay,
    this.PlannedTransactionColumns.bundledIn,
  ]
}
