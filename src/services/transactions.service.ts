import { computed, Injectable, signal } from '@angular/core';
import { InputsService } from './inputs.service';
import { DateTime } from 'luxon';
import { AirtableService } from './airtable.service';
import { BalancesService } from './balances.service';
import { IBalanceOnDate } from 'models/interfaces/IBalance';
import { Transaction } from 'models/Transactions';
import { AccountsService } from './accounts.service';
import { AirtableTransaction } from 'models/airtable/api';
import { ProjectedTransactionService } from './projected-transactions.service';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  startingDate = signal<DateTime | null>(null);
  endingDate = signal<DateTime | null>(null);
  actualBalances = computed<IBalanceOnDate[]>(() => {
    return this.balancesService.getActualBalancesOnDates(
      this.startingDate(),
      this.endingDate(),
      this.getActualTransactions()
    );
  });
  projectedBalances = computed<IBalanceOnDate[]>(() => {
    var startingBalance = this.actualBalances().length > 0 ? this.actualBalances()[this.actualBalances().length - 1] : null;
    var firstTransaction = startingBalance?.transactions[0] ?? null;
    var endingDate = this.endingDate();
    var plannedTransactions = this.airtableService.plannedTransactions()
    if (startingBalance === null || firstTransaction === null || endingDate === null) {
      return [];
    }
    var transactions = this.projectedTransactionService.getProjectedPlannedTransactions(
      plannedTransactions,
      endingDate,
      firstTransaction?.sortOrder ?? 0,
    )
    return this.balancesService.getProjectedRunningBalancesOnDates(
      this.startingDate(),
      this.endingDate(),
      transactions,
      startingBalance,
    );
  });
  allBalances = computed<IBalanceOnDate[]>(() => {
    return this.actualBalances().concat(this.projectedBalances());
  });

  constructor(
    private inputsService: InputsService,
    private airtableService: AirtableService,
    private balancesService: BalancesService,
    private accountsService: AccountsService,
    private projectedTransactionService: ProjectedTransactionService,
  ) {
    this.inputsService.apiForm.controls.startingDate.valueChanges.subscribe(date => {
      this.startingDate.set(date);
    });
    this.inputsService.apiForm.controls.endingDate.valueChanges.subscribe(date => {
      this.endingDate.set(date);
    });
  }

  getActualTransactions(): Transaction[] {
    var accounts = this.accountsService.getAccounts();
    var airtableTransactions: AirtableTransaction[] = this.airtableService.transactions();
    // sort by date and then by custom sort order because banks are too stupid to include transaction times
    airtableTransactions.sort(this.sortAirtableTransactions);
    return airtableTransactions.map<Transaction>(airtableTransaction => {
      var account = accounts.find(account => account.name === airtableTransaction.Account);
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

  sortAirtableTransactions(transaction1: AirtableTransaction, transaction2: AirtableTransaction): number {
    var date1 = DateTime.fromISO(transaction1.Date);
    var date2 = DateTime.fromISO(transaction2.Date);
    if (date1.diff(date2).milliseconds !== 0) {
      return date1.diff(date2).milliseconds;
    }
    return transaction1['Sort Order'] - transaction2['Sort Order'];
  }
}
