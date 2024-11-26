import { computed, Injectable } from '@angular/core';
import { InputsService } from './inputs.service';
import { DateTime } from 'luxon';
import { AirtableService } from './airtable.service';
import { Transaction } from 'models/Transactions';
import { AccountsService } from './accounts.service';
import { AirtableTransaction } from 'models/airtable/api';
import { STRINGS } from 'common/library';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  transactions = computed(() => this.getActualTransactions());
  filteredTransactions = computed(() => {
    var startingDate = this.inputsService.startingDate();
    var endingDate = this.inputsService.endingDate();
    if (startingDate === null || endingDate === null) {
      return [];
    }
    return this.getFilteredTransactions(this.transactions(), startingDate, endingDate);
  });

  constructor(
    private inputsService: InputsService,
    private airtableService: AirtableService,
    private accountsService: AccountsService,
  ) { }

  getActualTransactions(): Transaction[] {
    var accounts = this.accountsService.accounts();
    var airtableTransactions: AirtableTransaction[] = this.airtableService.transactions();
    // sort by date and then by custom sort order because banks are too stupid to include transaction times
    airtableTransactions.sort(this.sortAirtableTransactions);
    return airtableTransactions.map<Transaction>(airtableTransaction => {
      var account = accounts.find(account => STRINGS.compare(airtableTransaction.Account, account.name, account.aliases) === 0);
      if (!account) {
        console.error('Account in transaction not found', airtableTransaction);
        throw new Error('Account in transaction not found');
      }
      return new Transaction(
        airtableTransaction.id,
        DateTime.fromISO(airtableTransaction.Date),
        airtableTransaction['Sort Order'],
        airtableTransaction['Merchant Name'],
        airtableTransaction.Category,
        airtableTransaction.Amount,
        account,
        airtableTransaction['Running Balance'] - airtableTransaction.Amount,
      );
    });
  }

  getFilteredTransactions(transactions: Transaction[], startingDate: DateTime, endingDate: DateTime): Transaction[] {
    if (!startingDate || !endingDate) {
      return [];
    }
    return transactions.filter(transaction => {
      return transaction.date >= startingDate && transaction.date <= endingDate;
    });
  }

  sortAirtableTransactions(transaction1: AirtableTransaction, transaction2: AirtableTransaction): number {
    var date1 = DateTime.fromISO(transaction1.Date);
    var date2 = DateTime.fromISO(transaction2.Date);
    if (date1.diff(date2).milliseconds !== 0) {
      return date1.diff(date2).milliseconds;
    }
    return transaction1['Sort Order'] - transaction2['Sort Order'];
  }
}
