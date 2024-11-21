import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IBalanceOnDate, ITransactionWithCalculations } from '../../../models/Transactions';
import { DateTimePipe } from 'common/angular/pipes/datetime.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

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
  ],
  templateUrl: './balance-on-day-table.component.html',
})
export class BalanceOnDayTableComponent {
  balance = input.required<IBalanceOnDate | null>();
  displayedColumns = ['date', 'balance', 'calculation', 'description'];

  constructor() { }

  getCalculatedBalanceClass(transaction: ITransactionWithCalculations): string {
    return transaction.calculatedBalance < 0 ? 'text-red-400' : 'text-green-400';
  }
}
