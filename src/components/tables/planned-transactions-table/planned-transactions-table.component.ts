import { CommonModule } from '@angular/common';
import { Component, computed, viewChild } from '@angular/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { IPlannedTransaction, PlannedTransactionTableColumns } from '../../../models/airtable/api/IPlannedTransaction';
import { TablesService } from '../../../services/tables.service';
import { AirtableService } from '../../../services/airtable.service';

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
  PlannedTransactionTableColumns = PlannedTransactionTableColumns
  plannedTransactionsPaginator = viewChild.required(MatPaginator);
  plannedTransactionsDataSource = computed(() => {
    var dataSource = new MatTableDataSource<IPlannedTransaction>();
    dataSource.paginator = this.plannedTransactionsPaginator();
    dataSource.data = this.tablesService.getRecordsOrEmpty<IPlannedTransaction>('Planned Transactions').map(record => record.fields);
    return dataSource;
  });

  displayedPlannedTransactionColumns = [
    PlannedTransactionTableColumns.Description,
    PlannedTransactionTableColumns.Active,
    PlannedTransactionTableColumns.Amount,
    PlannedTransactionTableColumns.Priority,
    PlannedTransactionTableColumns.Category,
    PlannedTransactionTableColumns.IsIncome,
    PlannedTransactionTableColumns.Account,
    PlannedTransactionTableColumns.Occurence,
    PlannedTransactionTableColumns.Autopay,
    PlannedTransactionTableColumns.Shared,
    PlannedTransactionTableColumns.DateOfTransaction,
  ]

  constructor(
    private tablesService: TablesService,
    private airtableService: AirtableService,
  ) {
  }
}
