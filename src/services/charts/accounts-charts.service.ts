import { computed, Injectable } from '@angular/core';
import { AccountsService } from 'src/services/accounts.service';
import { TransactionsService } from 'src/services/transactions.service';

@Injectable({
  providedIn: 'root'
})
export class AccountChartsService {
  accountSummaries = computed(() => {
    return this.accountsService.getAccountSummaries(this.transactionService.filteredTransactions(), this.accountsService.accounts())
  });

  constructor(
    private accountsService: AccountsService,
    private transactionService: TransactionsService,
  ) { }
}
