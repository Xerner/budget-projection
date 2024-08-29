import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputsService } from '../../services/inputs.service';
import { BudgetService } from '../../services/budget.service';
import { map, tap } from 'rxjs';

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
