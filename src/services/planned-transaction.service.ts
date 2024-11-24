import { computed, Injectable } from '@angular/core';
import { AirtableService } from './airtable.service';
import { PlannedTransaction } from 'models/PlannedTransaction';
import { AccountsService } from './accounts.service';
import { Account } from 'models/Account';
import { Occurrence } from 'models/interfaces/IOccurences';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class PlannedTransactionService {
  constructor(
    private airtableService: AirtableService,
    private accountsService: AccountsService,
  ) { }

  plannedTransactions = computed<PlannedTransaction[]>(() => {
    var airtablePlannedTransactions = this.airtableService.plannedTransactions();
    var accounts = this.accountsService.accounts();
    if (airtablePlannedTransactions.length === 0 || accounts.length === 0) {
      return [];
    }
    return airtablePlannedTransactions.map(airtablePlannedTransaction => {
      var account = accounts.find(account => account.id === airtablePlannedTransaction.Account?.[0]) ?? Account.UnknownAccount();
      return new PlannedTransaction(
        airtablePlannedTransaction.id,
        airtablePlannedTransaction.Description,
        airtablePlannedTransaction.Active,
        airtablePlannedTransaction.Amount,
        airtablePlannedTransaction.Priority,
        airtablePlannedTransaction.Category,
        airtablePlannedTransaction['Is Income'],
        account,
        airtablePlannedTransaction.Occurrence as Occurrence,
        airtablePlannedTransaction.Autopay,
        airtablePlannedTransaction.Shared,
        DateTime.fromISO(airtablePlannedTransaction['Date Of Transaction']),
      )
    })
  })
}
