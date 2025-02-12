import { Inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { INotification } from './INotification';
import { Enum } from '../../../types/Enum';
import { DEFAULT_NOTIFICATION_TYPE } from './token';

@Injectable()
export class NotificationPoolService<TNotificationTypes extends Enum> {
  private readonly _pools = new Map<TNotificationTypes, WritableSignal<INotification<TNotificationTypes>[]>>();

  constructor(
    @Inject(DEFAULT_NOTIFICATION_TYPE) private defaultType: TNotificationTypes,
  ) { }

  /**
   * Retrieves the notifications for the specified pool.
   * @param notificationPool The name of the notification pool.
   * @returns A signal containing the notifications.
   */
  get(notificationPool?: TNotificationTypes): Signal<INotification<TNotificationTypes>[]> {
    notificationPool = this.ensureNotificationTypeIsNotUndefined(notificationPool);
    this.addPoolIfNotExists(notificationPool);
    return this._pools.get(notificationPool)!;
  }

  first(notificationPool?: TNotificationTypes): INotification<TNotificationTypes> {
    notificationPool = this.ensureNotificationTypeIsNotUndefined(notificationPool);
    this.addPoolIfNotExists(notificationPool);
    return this._pools.get(notificationPool)!()[0];
  }

  /**
   * Adds a notification to the specified notification types pool.
   * @param notification The notification to add.
   */
  add(notification: INotification<TNotificationTypes>) {
    var notificationPool = this.ensureNotificationTypeIsNotUndefined(notification.type);
    this.addPoolIfNotExists(notificationPool);
    this._pools.get(notificationPool)!.update(notifications => [...notifications, notification]);
  }

  /**
   * Removes a notification from its specified notification types pool.
   * @param notification The notification to remove.
   */
  remove(notification: INotification<TNotificationTypes>) {
    var notificationPool = this.ensureNotificationTypeIsNotUndefined(notification.type);
    this.addPoolIfNotExists(notificationPool);
    var pool = this._pools.get(notificationPool)!();
    var item = pool.find(notification_ => notification_ === notification);
    if (item === undefined) {
      return;
    }
    this._pools.get(notificationPool)!.update(notifications => notifications.filter(notification_ => notification_ !== notification));
  }

  /**
   * Removes a notification at a specific index from the specified pool.
   * @param index The index of the notification to remove.
   * @param notificationPool The name of the notification pool.
   */
  removeIndex(index: number, notificationPool?: TNotificationTypes) {
    notificationPool = this.ensureNotificationTypeIsNotUndefined(notificationPool);
    this.addPoolIfNotExists(notificationPool);
    if (index < 0) {
      return;
    }
    var pool = this._pools.get(notificationPool)!();
    if (index >= pool.length) {
      return;
    }
    if (index === 0) {
      this.pop(notificationPool);
      return;
    }
    this._pools.get(notificationPool)!.update(notifications => notifications.filter((_, i) => i !== index));
  }

  /**
   * Removes the last notification from the specified pool.
   * @param notificationPool The name of the notification pool.
   */
  pop(notificationPool?: TNotificationTypes): INotification<TNotificationTypes> {
    notificationPool = this.ensureNotificationTypeIsNotUndefined(notificationPool);
    this.addPoolIfNotExists(notificationPool);
    var pool  = this._pools.get(notificationPool)!;
    var item = pool()[pool().length - 1];
    pool.update(notifications => notifications.slice(0, -1));
    return item;
  }

  /**
   * Removes the first notification from the specified pool.
   * @param notificationPool The name of the notification pool.
   */
  shift(notificationPool?: TNotificationTypes): INotification<TNotificationTypes> {
    notificationPool = this.ensureNotificationTypeIsNotUndefined(notificationPool);
    this.addPoolIfNotExists(notificationPool);
    var pool = this._pools.get(notificationPool)!;
    var item = pool()[0];
    pool.update(notifications => notifications.slice(1));
    return item;
  }

  /**
   * Adds a new notification pool if it does not already exist.
   * @param notificationPool The name of the notification pool.
   */
  private addPoolIfNotExists(notificationPool?: TNotificationTypes) {
    notificationPool = this.ensureNotificationTypeIsNotUndefined(notificationPool);
    if (!this._pools.has(notificationPool)) {
      this._pools.set(notificationPool, signal([]));
    }
  }

  private ensureNotificationTypeIsNotUndefined(notificationType: TNotificationTypes | undefined): TNotificationTypes {
    if (notificationType === undefined) {
      return this.defaultType;
    }
    return notificationType
  }
}
