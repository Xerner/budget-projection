import { ApplicationConfig } from '@angular/core';
import { withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenAuthInterceptor } from './common/angular/interceptors/auth/token-auth.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideLuxonDateAdapter } from '@angular/material-luxon-adapter';
import { provideHttpCacheClient, provideQueryParams } from './common/angular/services';
import { QueryParams } from './models/query-param-keys';
import { provideBearerTokenAuth } from './common/angular/interceptors';
import { LoadingService, provideLoadingTracking } from './common/angular/services/loading';
import { provideNotificationPools } from './common/angular/services/notifications';
import { NotificationTypes } from './models/NotificationTypes';
import { cacheSettings } from './cache.settings';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
    { provide: HTTP_INTERCEPTORS, useClass: TokenAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenAuthInterceptor, multi: true },
    provideBearerTokenAuth(),
    provideLuxonDateAdapter(),
    provideQueryParams(QueryParams),
    provideLoadingTracking(LoadingService),
    provideNotificationPools(NotificationTypes.Errors),
    provideHttpCacheClient(cacheSettings, withInterceptorsFromDi()),
  ]
};
