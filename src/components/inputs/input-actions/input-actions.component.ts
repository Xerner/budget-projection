import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpCacheStore } from 'common/angular/services';
import { AirtableService } from 'src/services/airtable.service';

@Component({
  selector: 'app-input-actions',
  imports: [
    MatButtonModule,
  ],
  templateUrl: './input-actions.component.html',
})
export class InputActionsComponent {
  constructor(
    private airtableService: AirtableService,
    private httpCache: HttpCacheStore,
  ) { }

  onFetchClicked() {
    this.airtableService.fetchAll();
  }

  onLogCacheClicked() {
    console.log(this.httpCache.serialize());
  }

  onBustCacheClicked() {
    this.httpCache.bust();
  }
}
