import { computed, Injectable } from '@angular/core';
import { AccountsService } from 'services/accounts.service';
import { TransactionService } from 'services/transactions.service';

@Injectable({
  providedIn: 'root'
})
export class AccountChartsService {
  accountSummaries = computed(() => {
    return this.accountsService.getAccountSummaries(this.transactionService.filteredTransactions(), this.accountsService.accounts())
  });

  constructor(
    private accountsService: AccountsService,
    private transactionService: TransactionService,
  ) { }
}
