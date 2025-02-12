import { InjectionToken } from "@angular/core";
import { IAuthTokenService } from "./IAuthTokenService";

export const AUTH_TOKEN_SERVICE = new InjectionToken<IAuthTokenService>("AUTH_TOKEN_SERVICE_TOKEN");
