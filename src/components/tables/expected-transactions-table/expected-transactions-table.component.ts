import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { AirtableService } from '../../../services/airtable.service';

@Component({
  selector: 'app-expected-transactions-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
  ],
  templateUrl: './expected-transactions-table.component.html',
})
export class ExpectedTransactionsTableComponent {
  constructor(
    protected airtableService: AirtableService
  ) { }

  displayedPlannedTransactionColumns = ['description', 'active', 'amount',  'priority', 'category', 'is income', 'account', 'occurence', 'autopay', 'shared?', 'date of transaction'];
  displayedTransactionColumns = ['date', 'description', 'amount', 'running balance', 'account'];

  protected getRecordsOrEmpty<T>(tableName: string): T[] {
    var records = this.airtableService.records.find(record => record().tableIdOrName === tableName);
    return records ? records().records : [];
  }
}
