import { Injectable } from '@angular/core';
import { AccountType } from 'models/Account';
import { Transaction } from 'models/Transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsStyleService {
  getTransactionAmountClass(transaction: Transaction) {
    return transaction.amount > 0 ? "text-green-400" : "text-red-400";
  }
}
