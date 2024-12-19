import { Component } from '@angular/core';
import { InputsComponent } from '../inputs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpCacheStore } from 'common/angular/services';
import { AirtableService } from 'services/airtable.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inputs-dialog',
  imports: [
    InputsComponent,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './inputs-dialog.component.html',
})
export class InputsDialogComponent {
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
