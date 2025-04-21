import { Component } from '@angular/core';
import { InputsComponent } from '../inputs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InputActionsComponent } from "../input-actions/input-actions.component";

@Component({
  selector: 'app-inputs-dialog',
  imports: [
    InputsComponent,
    MatDialogModule,
    MatButtonModule,
    InputActionsComponent
],
  templateUrl: './inputs-dialog.component.html',
})
export class InputsDialogComponent {
}
