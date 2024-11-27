import { computed, Injectable } from '@angular/core';
import { AirtableService } from './airtable.service';
import { Account, AccountType } from 'models/Account';
import { Transaction } from 'models/Transactions';
import { AccountSummary } from 'models/AccountSummary';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = computed<Account[]>(() => this.airtableService.accounts().map<Account>(account => new Account(
    account.id,
    account.fields.Name ? account.fields.Name : 'Unnamed Account',
    account.fields.Aliases?.split(',').map(alias => alias.trim()),
    account.fields.Owner ? account.fields.Owner : '',
    account.fields.Type ? account.fields.Type as AccountType : 'Debit',
  )));

  constructor(
    private airtableService: AirtableService,
  ) { }

  getAccountSummaries(transactions: Transaction[], accounts: Account[]): AccountSummary[] {
    var accountSummaries = accounts
      .map<AccountSummary>(account => new AccountSummary(
        account,
        transactions.filter(transaction => account.doesNameRepresent(transaction.account.name)),
      ));
    return accountSummaries;
  }
}
