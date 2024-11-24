import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { DateTimePipe } from 'common/angular/pipes/datetime.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { IBalanceOnDate } from 'models/interfaces/IBalance';
import { Transaction } from 'models/Transactions';

@Component({
  selector: 'app-balance-on-day-table',
  standalone: true,
  imports: [
    CommonModule,
    DateTimePipe,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    DecimalPipe,
  ],
  templateUrl: './balance-on-day-table.component.html',
})
export class BalanceOnDayTableComponent {
  balance = input.required<IBalanceOnDate | null>();
  displayedColumns = [
    '#',
    'date',
    'previousBalance',
    'plus',
    'amount',
    'equals',
    'balance',
    'account',
    'description',
  ];

  constructor() { }

  getCalculatedBalanceClass(transaction: Transaction): string {
    return transaction.getAmount() < 0 ? 'text-red-400' : 'text-green-400';
  }
}
