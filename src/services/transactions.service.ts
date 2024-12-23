import { computed, Injectable } from '@angular/core';
import { InputsService } from './inputs.service';
import { DateTime } from 'luxon';
import { AirtableService } from './airtable.service';
import { Transaction } from 'models/Transactions';
import { AccountsService } from './accounts.service';
import { AirtableTransaction } from 'models/api/airtable';
import { STRINGS } from 'common/library';
import { Account } from 'models/Account';
import { ProjectedTransactionService } from './projected-transactions.service';
import { PlannedTransactionService } from './planned-transaction.service';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  transactions = computed(() => {
    var accounts = this.accountsService.accounts();
    var airtableTransactions: AirtableTransaction[] = this.airtableService.transactions();
    var transactions = this.getTransactions(airtableTransactions, accounts);
    var endingDate = this.inputsService.endingDate();
    if (accounts.length == 0 || transactions.length == 0 || endingDate === null) {
      return [];
    }
    var plannedTransactions = this.plannedTransactionsService.plannedTransactions();
    var dateFilters = this.plannedTransactionsService.dateFilters();
    var sortOrder = transactions.length === 0 ? 0 : transactions[transactions.length - 1].sortOrder + 1;
    var projectedTransactions = this.projectedTransactionService.getProjectedPlannedTransactions(
      plannedTransactions,
      dateFilters,
      endingDate,
      sortOrder,
    );
    return transactions.concat(projectedTransactions);
  });
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
    private plannedTransactionsService: PlannedTransactionService,
    private projectedTransactionService: ProjectedTransactionService,
  ) { }

  getTransactions(airtableTransactions: AirtableTransaction[], accounts: Account[]): Transaction[] {
    // sort by date and then by custom sort order because banks are too stupid to include transaction times
    airtableTransactions.sort(this.sortAirtableTransactions);
    return airtableTransactions.map<Transaction>(airtableTransaction => {
      var accountInTransaction: Account | undefined = accounts.find(account => STRINGS.compare(airtableTransaction.fields.Account, account.name, account.aliases) === 0);
      if (!accountInTransaction) {
        console.error('Account in transaction not found', airtableTransaction);
        throw new Error('Account in transaction not found');
      }
      return new Transaction(
        airtableTransaction.id,
        DateTime.fromISO(airtableTransaction.fields.Date),
        airtableTransaction.fields['Sort Order'],
        airtableTransaction.fields['Merchant Name'],
        airtableTransaction.fields.Category,
        airtableTransaction.fields.Amount,
        accountInTransaction,
        airtableTransaction.fields['Running Balance'] - airtableTransaction.fields.Amount,
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
    var date1 = DateTime.fromISO(transaction1.fields.Date);
    var date2 = DateTime.fromISO(transaction2.fields.Date);
    if (date1.diff(date2, 'days').days !== 0) {
      return date1.diff(date2, 'days').days;
    }
    return transaction1.fields['Sort Order'] - transaction2.fields['Sort Order'];
  }

  sortTransactions(transaction1: Transaction, transaction2: Transaction): number {
    return transaction1.compareOrder(transaction2);
  }
}
