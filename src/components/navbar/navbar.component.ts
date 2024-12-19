import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NotificationPoolService } from 'common/angular/services/notifications';
import { NotificationTypes } from 'models/NotificationTypes';
import { AppStore } from 'stores/app.store';
import { MatDialog } from '@angular/material/dialog';
import { InputsDialogComponent } from 'components/inputs/inputs-dialog/inputs-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { ColorSchemeInputComponent } from 'components/inputs/color-scheme-input/color-scheme-input.component';
import { MatButtonModule } from '@angular/material/button';
import { ColorModeComponent } from "../inputs/color-mode-input/color-mode-input.component";

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    ColorSchemeInputComponent,
    ColorModeComponent
],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  NotificationTypes = NotificationTypes;

  constructor(
    protected appStore: AppStore,
    protected notifications: NotificationPoolService<NotificationTypes>,
    protected dialog: MatDialog,
  ) { }

  openInputsDialog() {
    this.dialog.open(InputsDialogComponent);
  }
}
