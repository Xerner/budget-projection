import { InjectionToken } from "@angular/core";
import { StringEnum } from "../../../types/Enum";

export const DEFAULT_NOTIFICATION_TYPE = new InjectionToken<StringEnum>('DefaultNotificationType');
