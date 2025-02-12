import { InjectionToken } from "@angular/core";
import { ILoadingService } from "./ILoadingService";

/**
 * The token for the loading service that the loading interceptor will use
 */
export const LOADING_SERVICE_TOKEN = new InjectionToken<ILoadingService>("LOADING_SERVICE_TOKEN");
