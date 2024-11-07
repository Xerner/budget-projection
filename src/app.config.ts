import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BearerTokenAuthInterceptor } from './common/angular/interceptors/auth/bearer-auth.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideLuxonDateAdapter } from '@angular/material-luxon-adapter';
import { provideQueryParams } from './common/angular/services';
import { QueryParams } from './models/query-param-keys';
import { provideBearerTokenAuth } from './common/angular/interceptors';
import { TokenService } from './services/token.service';
import { LoadingService, provideLoadingTracking } from './common/angular/services/loading';
import { provideNotificationPools } from './common/angular/services/notifications';
import { NotificationTypes } from './models/NotificationTypes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideCharts(withDefaultRegisterables()),
    { provide: HTTP_INTERCEPTORS, useClass: BearerTokenAuthInterceptor, multi: true }, provideAnimationsAsync(),
    provideLuxonDateAdapter(),
    provideAnimationsAsync(),
    provideQueryParams(QueryParams),
    provideBearerTokenAuth(TokenService),
    provideLoadingTracking(LoadingService),
    provideNotificationPools(NotificationTypes.Errors),
    { provide: HTTP_INTERCEPTORS, useClass: BearerTokenAuthInterceptor, multi: true },
  ]
};
