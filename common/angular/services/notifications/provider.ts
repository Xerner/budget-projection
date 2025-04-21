import { Provider, makeEnvironmentProviders } from "@angular/core";
import { Enum } from "../../../types/Enum";
import { DEFAULT_NOTIFICATION_TYPE } from "./token";
import { NotificationPoolService } from "./notification-pool.service";

export function provideNotificationPools<TDefaultNotificationType extends Enum>(defaultNotificationType: TDefaultNotificationType) {
  const providers: Provider[] = [
    { provide: DEFAULT_NOTIFICATION_TYPE, useValue: defaultNotificationType },
    NotificationPoolService
  ]

  return makeEnvironmentProviders(providers);
}
