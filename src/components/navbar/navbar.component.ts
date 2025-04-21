import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NotificationPoolService } from 'common/angular/services/notifications';
import { NotificationTypes } from 'src/models/NotificationTypes';
import { AppStore } from 'src/stores/app.store';
import { MatDialog } from '@angular/material/dialog';
import { InputsDialogComponent } from 'src/components/inputs/inputs-dialog/inputs-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { ColorSchemeInputComponent } from 'src/components/inputs/color-scheme-input/color-scheme-input.component';
import { MatButtonModule } from '@angular/material/button';
import { ColorModeComponent } from "../inputs/color-mode-input/color-mode-input.component";
import { ColorModeService } from 'src/services/color-mode.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    ColorSchemeInputComponent,
    ColorModeComponent,
    MatTooltipModule,
],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  NotificationTypes = NotificationTypes;

  constructor(
    protected appStore: AppStore,
    protected notifications: NotificationPoolService<NotificationTypes>,
    protected dialog: MatDialog,
    protected colorModeService: ColorModeService,
  ) { }

  openInputsDialog() {
    this.dialog.open(InputsDialogComponent);
  }
}
