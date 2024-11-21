import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IBalanceOnDate, ITransactionWithCalculations } from '../../../../models/Transactions';
import { DateTimePipe } from 'common/angular/pipes/datetime.pipe';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-balance-menu',
  standalone: true,
  imports: [
    CommonModule,
    DateTimePipe,
    MatMenuModule,
  ],
  templateUrl: './balance-menu.component.html',
})
export class BalanceMenuComponent {
  balance = input.required<IBalanceOnDate | null>();

  constructor() { }

  getCalculatedBalanceClass(transaction: ITransactionWithCalculations): string {
    return transaction.calculatedBalance < 0 ? 'text-red-400' : 'text-green-400';
  }
}
