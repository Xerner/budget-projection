import { CommonModule } from '@angular/common';
import { Component, computed, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiTransaction, TransactionTableColumns } from '../../../models/airtable/api/Transactions';
import { TablesService } from '../../../services/tables.service';

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
  TransactionTableColumns = TransactionTableColumns
  transactionsPaginator = viewChild.required(MatPaginator);
  transactionsDataSource = computed(() => {
    var dataSource = new MatTableDataSource<ApiTransaction>();
    dataSource.paginator = this.transactionsPaginator();
    dataSource.data = this.tablesService.getRecordsOrEmpty<ApiTransaction>('Transactions').map(record => record.fields);
    return dataSource;
  });

  displayedTransactionColumns = [
    TransactionTableColumns.Date,
    TransactionTableColumns.Description,
    TransactionTableColumns.Amount,
    TransactionTableColumns.RunningBalance,
    TransactionTableColumns.Account,
  ]

  constructor(
    protected tablesService: TablesService,
  ) { }
}
