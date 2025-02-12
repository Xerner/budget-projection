import { Injectable } from '@angular/core';
import { Transaction } from 'src/models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsStyleService {
  getTransactionAmountClass(transaction: Transaction) {
    if (transaction.isCreditPayoff()) {
      return "text-gray-400";
    }
    return transaction.amount > 0 ? "text-green-400" : "text-red-400";
  }
}
