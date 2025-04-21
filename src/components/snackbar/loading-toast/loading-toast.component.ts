import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-loading-toast',
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './loading-toast.component.html',
})
export class LoadingToastComponent {
  toast = input.required<ReturnType<typeof Toastify>>();
  message = input.required<string>();
  mode = input<ProgressSpinnerMode>("indeterminate");
  progress = input<number>();
}
