import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputsService } from '../../services/inputs.service';
import { BudgetService } from '../../services/budget.service';
import { map, tap } from 'rxjs';
import { QUERY_PARAM_KEYS, QueryParamKeys } from '../../../repos/common/angular/query-params';
import { IGlobalQueryParams } from '../../settings/query-param-keys';

@Component({
  selector: 'app-api-inputs',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './api-inputs.component.html',
})
export class ApiInputsComponent {
  constructor(
    protected inputsService: InputsService,
    private budgetService: BudgetService,
    @Inject(QUERY_PARAM_KEYS) protected queryParams: QueryParamKeys<IGlobalQueryParams>
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
