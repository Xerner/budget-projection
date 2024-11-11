import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { PlannedTransactionsTableComponent } from './planned-transactions-table/planned-transactions-table.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    MatTabsModule,
    TransactionsTableComponent,
    PlannedTransactionsTableComponent,
  ],
  templateUrl: './tables.component.html',
})
export class TablesComponent {}
