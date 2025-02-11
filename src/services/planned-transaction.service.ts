import { computed, Injectable } from '@angular/core';
import { AirtableService } from './airtable.service';
import { PlannedTransaction } from 'models/PlannedTransaction';
import { AccountsService } from './accounts.service';
import { Account } from 'models/Account';
import { Occurrence } from 'models/Occurrences';
import { AirtablePlannedTransactionDateFilter } from 'models/api/airtable/PlannedTransactionDateFilters';
import { DateFilterEntity } from 'models/DateFilter';
import { AirtablePlannedTransaction } from 'models/api/airtable';
import { DateTime } from 'luxon';
import { DateFilterService } from './date-filters/date-filters.service';

@Injectable({
  providedIn: 'root'
})
export class PlannedTransactionService {
  constructor(
    private airtableService: AirtableService,
    private accountsService: AccountsService,
    private dateFilterService: DateFilterService,
  ) { }

  plannedTransactions = computed<PlannedTransaction[]>(() => {
    var airtablePlannedTransactions = this.airtableService.plannedTransactions();
    var accounts = this.accountsService.accounts();
    if (airtablePlannedTransactions.length === 0 || accounts.length === 0) {
      return [];
    }
    return airtablePlannedTransactions.map(airtablePlannedTransaction => {
      var account = accounts
        .find(account => account.id === airtablePlannedTransaction.fields.Account?.[0]) ?? Account.UnknownAccount();
      var bundledIn: AirtablePlannedTransaction | null = airtablePlannedTransactions
        .find(transaction => transaction.id === airtablePlannedTransaction.fields['Bundled In']?.[0]) ?? null;
      return new PlannedTransaction(
        airtablePlannedTransaction.id,
        airtablePlannedTransaction.fields.Description,
        airtablePlannedTransaction.fields.Active,
        airtablePlannedTransaction.fields.Amount,
        airtablePlannedTransaction.fields.Priority,
        airtablePlannedTransaction.fields.Category,
        account,
        airtablePlannedTransaction.fields.Occurrence as Occurrence,
        airtablePlannedTransaction.fields.Autopay,
        DateTime.fromISO(airtablePlannedTransaction.fields['Starting Date']),
        bundledIn);
    })
  })
  dateFilters = computed<DateFilterEntity<PlannedTransaction>[]>(() => {
    var dateFilters = this.airtableService.plannedTransactionDateFilters();
    var plannedTransactions = this.plannedTransactions();
    if (dateFilters.length === 0 || plannedTransactions.length === 0) {
      return [];
    }
    return this.getPlannedTransactionDateFilters(dateFilters, plannedTransactions);
  });

  getPlannedTransactionDateFilters(dateFilters: AirtablePlannedTransactionDateFilter[], plannedTransactions: PlannedTransaction[]): DateFilterEntity<PlannedTransaction>[] {
    // sort by date and then by custom sort order because banks are too stupid to include transaction times
    return dateFilters.map<DateFilterEntity<PlannedTransaction>>(dateFilter => {
      var plannedTransaction = plannedTransactions.find(_plannedTransaction => _plannedTransaction.id === dateFilter.fields.Transaction?.[0]);
      if (!plannedTransaction) {
        console.error('Planned Transaction in date filter not found', dateFilter);
        throw new Error('Planned Transaction in date filter not found');
      }
      var dateFilterClass = this.dateFilterService.filterNameToClass[dateFilter.fields["Date Filter Type"]];
      return new DateFilterEntity<PlannedTransaction>(
        plannedTransaction,
        new dateFilterClass(dateFilter.fields["Order"], dateFilter.fields["Input"]),
      );
    });
  }
}
