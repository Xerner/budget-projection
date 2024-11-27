import { computed, Injectable } from '@angular/core';
import { AirtableService } from './airtable.service';
import { PlannedTransaction } from 'models/PlannedTransaction';
import { AccountsService } from './accounts.service';
import { Account } from 'models/Account';
import { Occurrence } from 'models/Occurences';
import { DateTime } from 'luxon';
import { InputsService } from './inputs.service';

@Injectable({
  providedIn: 'root'
})
export class PlannedTransactionService {
  constructor(
    private airtableService: AirtableService,
    private accountsService: AccountsService,
    private inputsService: InputsService,
  ) { }

  plannedTransactions = computed<PlannedTransaction[]>(() => {
    var airtablePlannedTransactions = this.airtableService.plannedTransactions();
    var accounts = this.accountsService.accounts();
    if (airtablePlannedTransactions.length === 0 || accounts.length === 0) {
      return [];
    }
    return airtablePlannedTransactions.map(airtablePlannedTransaction => {
      var account = accounts.find(account => account.id === airtablePlannedTransaction.fields.Account?.[0]) ?? Account.UnknownAccount();
      return new PlannedTransaction(
        airtablePlannedTransaction.id,
        airtablePlannedTransaction.fields.Description,
        airtablePlannedTransaction.fields.Active,
        airtablePlannedTransaction.fields.Amount,
        airtablePlannedTransaction.fields.Priority,
        airtablePlannedTransaction.fields.Category,
        airtablePlannedTransaction.fields['Is Income'],
        account,
        airtablePlannedTransaction.fields.Occurrence as Occurrence,
        airtablePlannedTransaction.fields.Autopay,
        airtablePlannedTransaction.fields.Shared,
        DateTime.fromISO(airtablePlannedTransaction.fields['Date Of Transaction']),
      )
    })
  })
  filteredPlannedTransactions = computed<PlannedTransaction[]>(() => {
    var startingDate = this.inputsService.startingDate();
    var endingDate = this.inputsService.endingDate();
    if (startingDate === null || endingDate === null) {
      return [];
    }
    return this.plannedTransactions()
      .filter(plannedTransaction => plannedTransaction.dateOfTransaction >= startingDate! && plannedTransaction.dateOfTransaction <= endingDate!)
  });
}
