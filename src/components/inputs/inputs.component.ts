import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InputsService } from '../../services/inputs.service';
import { BudgetService } from '../../services/budget.service';
import { map, tap } from 'rxjs';
import { IGlobalQueryParams } from '../../settings/query-param-keys';
import { QueryParamsService } from '../../common/angular/services';
import { AirtableService } from '../../services/airtable/airtable.service';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './inputs.component.html',
})
export class InputsComponent {
  constructor(
    protected inputsService: InputsService,
    private budgetService: BudgetService,
    protected queryParamService: QueryParamsService<IGlobalQueryParams>,
    protected airtableService: AirtableService,
  ) { }

  onFetchClicked() {
    this.budgetService.getPlannedTransactions()
    .pipe(
      tap(plannedTransactions => console.log('plannedTransactions', plannedTransactions)),
      map(transactions => this.budgetService.getProjectedPlannedTransactions(transactions))
    ).subscribe(projectedPlannedTransactions => {
      console.log('projectedPlannedTransactions', projectedPlannedTransactions);
    });
  }
}