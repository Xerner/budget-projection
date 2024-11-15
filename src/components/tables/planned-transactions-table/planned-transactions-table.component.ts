import { CommonModule } from '@angular/common';
import { Component, computed, viewChild } from '@angular/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { AirtableService } from '../../../services/airtable.service';
import { IPlannedTransaction } from '../../../models/Transactions';

@Component({
  selector: 'app-planned-transactions-table',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  templateUrl: './planned-transactions-table.component.html',
})
export class PlannedTransactionsTableComponent {
  plannedTransactionsPaginator = viewChild.required(MatPaginator);
  plannedTransactionsDataSource = computed(() => {
    var dataSource = new MatTableDataSource<IPlannedTransaction>();
    dataSource.paginator = this.plannedTransactionsPaginator();
    dataSource.data = this.airtableService.plannedTransactions();
    return dataSource;
  });

  displayedPlannedTransactionColumns: Partial<keyof IPlannedTransaction>[] = [
    "description",
    "active",
    "amount",
    "priority",
    "category",
    "isIncome",
    "account",
    "occurrence",
    "autopay",
    "shared",
    "dateOfTransaction",
  ]
  PlannedTransactionColumns: Record<keyof IPlannedTransaction, keyof IPlannedTransaction> = {
    id: "id",
    description: "description",
    active: "active",
    amount: "amount",
    priority: "priority",
    category: "category",
    isIncome: "isIncome",
    account: "account",
    occurrence: "occurrence",
    autopay: "autopay",
    shared: "shared",
    dateOfTransaction: "dateOfTransaction",
  }

  constructor(
    private airtableService: AirtableService,
  ) {
  }
}
