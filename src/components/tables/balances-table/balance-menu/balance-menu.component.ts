import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IBalance } from '../../../../models/Transactions';

@Component({
  selector: 'app-balance-menu',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './balance-menu.component.html',
})
export class BalanceMenuComponent {
  balance = input.required<IBalance | null>();

  constructor() { }
}
