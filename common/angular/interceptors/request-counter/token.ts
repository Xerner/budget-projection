import { InjectionToken } from "@angular/core";
import { IRequestCounter } from "./IRequestCounter";

export const REQUEST_COUNTER_TOKEN = new InjectionToken<IRequestCounter>('REQUEST_COUNTER_TOKEN');
