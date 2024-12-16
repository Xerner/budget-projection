import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InputsService } from '../../services/inputs.service';
import { AirtableService } from '../../services/airtable.service';
import { LoadingService } from '../../common/angular/services/loading';
import { Endpoints } from '../../models/Endpoints';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpCacheStore } from '../../common/angular/services';

@Component({
    selector: 'app-inputs',
    imports: [
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatProgressBarModule,
        MatDatepickerModule,
    ],
    templateUrl: './inputs.component.html'
})
export class InputsComponent {
  EndPoints = Endpoints;
  selectedBasesTables = computed(() => {
    var selectedBaseSchema = this.airtableService.baseSchema();
    if (selectedBaseSchema === null) {
      return [];
    }
    return selectedBaseSchema.tables;
  });

  constructor(
    protected inputsService: InputsService,
    protected airtableService: AirtableService,
    protected loadingService: LoadingService,
    protected httpCache: HttpCacheStore,
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
