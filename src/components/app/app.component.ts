import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsService } from '../../services/inputs.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApiInputsComponent } from "../api-inputs/api-inputs.component";
import { AppStore } from '../../stores/app.store';
import { HttpErrorResponse } from '@angular/common/http';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatProgressBarModule,
    ApiInputsComponent,
    DashboardComponent,
  ],
  host: {
    class: 'flex flex-col h-full',
  },
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    protected inputsService: InputsService,
    protected appStore: AppStore,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
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
