import { ApplicationConfig } from '@angular/core';
import { withInterceptorsFromDi } from "@angular/common/http";
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideLuxonDateAdapter } from '@angular/material-luxon-adapter';
import { provideHttpCacheClient, provideQueryParams } from './common/angular/services';
import { QueryParams } from './models/GlobalQueryParams';
import { provideBearerTokenAuth } from './common/angular/interceptors';
import { LoadingService, provideLoadingTracking, withInterceptor } from './common/angular/services/loading';
import { provideNotificationPools } from './common/angular/services/notifications';
import { NotificationTypes } from './models/NotificationTypes';
import { cacheSettings, preloadedCache } from './cache/cache.settings';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
    provideBearerTokenAuth(),
    provideLuxonDateAdapter(),
    provideQueryParams(QueryParams),
    provideLoadingTracking(LoadingService, withInterceptor()),
    provideNotificationPools(NotificationTypes.Errors),
    // provideHttpCacheClient(cacheSettings, withInterceptorsFromDi()),
    provideHttpCacheClient(cacheSettings, preloadedCache, withInterceptorsFromDi()),
  ]
};
