import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputsService } from 'src/services/inputs.service';
// import { InputsService } from 'src/services/inputs.service';
import { BaseChartDirective } from 'ng2-charts';
import { TransactionsService } from 'src/services/transactions.service';
import { TransactionsChartsService } from 'src/services/charts/transactions-charts.service';

@Component({
    selector: 'app-dashboard',
    imports: [
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        BaseChartDirective,
    ],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(
    protected inputsService: InputsService,
    protected transactionsService: TransactionsService,
    protected transactionsChartsService: TransactionsChartsService,
  ) { }
}
