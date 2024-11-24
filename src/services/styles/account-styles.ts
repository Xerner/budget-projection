import { Injectable } from '@angular/core';
import { Account } from 'models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountStylesService {
  getAccountTypeClass(account: Account): string {
    if (account?.type === undefined) {
      return "";
    }
    return account?.type === "Credit" ? "text-orange-400" : "text-purple-400";
  }
}
