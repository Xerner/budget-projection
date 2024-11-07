import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsService } from '../../services/inputs.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { InputsComponent } from "../inputs/inputs.component";
import { AppStore } from '../../stores/app.store';
import { HttpErrorResponse } from '@angular/common/http';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { NotificationPoolService } from '../../common/angular/services/notifications/notification-pool.service';
import { NotificationTypes } from '../../models/NotificationTypes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatProgressBarModule,
    InputsComponent,
    DashboardComponent,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    CommonModule,
  ],
  host: {
    class: 'flex flex-col h-full',
  },
  templateUrl: './app.component.html',
})
export class AppComponent {
  NotificationTypes = NotificationTypes;
  
  constructor(
    protected inputsService: InputsService,
    protected appStore: AppStore,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    protected notifications: NotificationPoolService<NotificationTypes>,
  ) {
    this.matIconRegistry.addSvgIcon(
      'airtable',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/airtable.svg`)
    );
  }

  errorToString(httpErrorResponse: HttpErrorResponse): string {
    return httpErrorResponse.error.error.message
  }
}
