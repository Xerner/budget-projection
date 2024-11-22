import { Injectable } from '@angular/core';
import { AirtableService } from './airtable.service';
import { Account } from 'models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(
    private airtableService: AirtableService,
  ) { }

  getAccounts(): Account[] {
    return this.airtableService.accounts().map(account => {
      return {
        id: account.id,
        name: account.name,
        aliases: account.aliases,
        type: account.type,
      };
    });
  }
}
