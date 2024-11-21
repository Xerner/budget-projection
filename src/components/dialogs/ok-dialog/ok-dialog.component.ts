import { Component, inject } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialogClose, MatDialogActions, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IDialogWithNoActionsData<T> {
  title: string;
  content: T;
}

@Component({
  selector: 'app-ok-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatDialogActions,
  ],
  templateUrl: './ok-dialog.component.html',
})
export class OkDialog<T> {
  readonly dialogRef = inject(MatDialogRef<IDialogWithNoActionsData<T>>);
  readonly data = inject<IDialogWithNoActionsData<T>>(MAT_DIALOG_DATA);

  close() {
    this.dialogRef.close();
  }
}
