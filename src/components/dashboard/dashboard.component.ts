import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputsService } from '../../services/inputs.service';
import { BaseChartDirective } from 'ng2-charts';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BaseChartDirective,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(
    protected inputsService: InputsService,
    protected budgetService: BudgetService,
  ) { }
}
