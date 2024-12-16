import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DateTimePipe } from 'common/angular/pipes/datetime.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { BalanceOnDate } from 'models/Balance';
import { Transaction } from 'models/Transactions';
import { ProjectedTransaction } from 'models/ProjectedTransaction';
import { BooleanPipe } from 'pipes/boolean.pipe';
import { AccountStylesService } from 'services/styles/account-styles';

@Component({
    selector: 'app-balance-on-day-table',
    imports: [
        CommonModule,
        DateTimePipe,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        MatTableModule,
        BooleanPipe,
    ],
    templateUrl: './balance-on-day-table.component.html'
})
export class BalanceOnDayTableComponent {
  balance = input.required<BalanceOnDate | null>();
  displayedColumns = [
    '#',
    'isProjected',
    'date',
    'sortOrder',
    'previousBalance',
    'plus',
    'amount',
    'equals',
    'balance',
    'account',
    'description',
  ];

  constructor(
    protected accountStyles: AccountStylesService,
  ) { }

  getCalculatedBalanceClass(transaction: Transaction): string {
    if (transaction.isExpense()) {
      return 'text-red-400';
    }
    if (transaction.isIncome()) {
      return 'text-green-400';
    }
    return 'text-gray-400';
  }

  isProjected(transaction: Transaction): boolean {
    return transaction instanceof ProjectedTransaction;
  }
}
