import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSnackBarRef } from '@angular/material/snack-bar';

export interface ILoadingToastData {
  /** Displayed before the action button */
  message: string;
  /** Displayed on the action button */
  actionMessage?: string;
  /** If trure, then progress has no effect. Other than when it is 100 and the icon turns into a checkmark */
  mode: ProgressSpinnerMode;
  /** Expected range is from 0 - 100 */
  progress?: number;
}

@Component({
  selector: 'app-loading-toast',
  imports: [
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  templateUrl: './loading-toast.component.html',
})
export class LoadingToastComponent {
  snackBarRef = inject(MatSnackBarRef);
  data: ILoadingToastData = {
    message: '',
    mode: 'indeterminate',
    progress: 0,
  };
}
