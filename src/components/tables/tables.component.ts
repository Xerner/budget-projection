import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { PlannedTransactionsTableComponent } from './planned-transactions-table/planned-transactions-table.component';
import { BalancesTableComponent } from './balances-table/balances-table.component';
import { TransactionsService } from '../../services/transactions.service';
import { AccountsSummariesTableComponent } from "./accounts-summaries-table/accounts-summaries-table.component";
import { PlannedTransactionService } from 'src/services/planned-transaction.service';
import { BalancesService } from 'src/services/balances.service';

@Component({
  selector: 'app-tables',
  imports: [
    MatTabsModule,
    TransactionsTableComponent,
    PlannedTransactionsTableComponent,
    BalancesTableComponent,
    AccountsSummariesTableComponent,
],
  templateUrl: './tables.component.html'
})
export class TablesComponent {
  tabs = [
    "Transactions",
    "Planned Transactions",
    "Balances",
  ]
  constructor(
    protected transactionsService: TransactionsService,
    protected plannedTransactionsService: PlannedTransactionService,
    protected balancesService: BalancesService
  ) { }
}
