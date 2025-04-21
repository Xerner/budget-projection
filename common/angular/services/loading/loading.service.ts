import { computed, EventEmitter, Injectable, Signal, signal } from '@angular/core';
import { ILoadingService } from './ILoadingService';
import { ILoadingItem } from './ILoading';

@Injectable()
export class LoadingService implements ILoadingService {
  readonly isAnyLoading = computed<boolean>(() => this.itemsLoading().length != 0);
  private readonly _itemsLoading = signal<ILoadingItem<any>[]>([]);
  readonly itemsLoading: Signal<ILoadingItem<any>[]> = this._itemsLoading.asReadonly();

  onStart = new EventEmitter<ILoadingItem<any>>();
  onStop = new EventEmitter<ILoadingItem<any>>();
  onUpdate = new EventEmitter<ILoadingItem<any>>();

  /**
   * Check if an item is loading
   * @param source The source of the item to check if it is loading
   * @returns True if the item is loading, false otherwise
   */
  isLoading(source: string): boolean {
    return this.itemsLoading().some(item => item.source === source);
  }

  /**
   * Start loading an item and send an event to all subscribers
   * @param source The source string of the item to check if it is loading
   * @returns The item that was started loading
   */
  start<T>(source: string): ILoadingItem<T>
  /**
   * Start loading an item and send an event to all subscribers
   * @param item The item to start loading
   * @returns The item that was started loading
   */
  start<T>(item: ILoadingItem<T>): ILoadingItem<T>
  start<T>(item: ILoadingItem<T> | string): ILoadingItem<T> {
    if (typeof item === 'string') {
      item = { source: item };
    }
    this._itemsLoading.set([...this.itemsLoading(), item]);
    this.onStart.emit(item);
    return item;
  }

  /**
   * Stop loading an item and send an event to all subscribers
   * @param item The item to stop loading
   */
  stop<T>(item: ILoadingItem<T>): void
  /**
   * Stop loading an item and send an event to all subscribers
   * @param source The source string of the item to stop loading
   */
  stop<T>(source: string): void
  stop<T>(source: ILoadingItem<T> | string): void {
    var item: ILoadingItem<T> | undefined;
    if (typeof source === 'string') {
      item = this.itemsLoading().find(item_ => item_.source === source);
    } else {
      item = this.itemsLoading().find(item_ => item_ === source);
    }
    if (item == undefined) {
      return;
    }
    this._itemsLoading.set(this.itemsLoading().filter(item_ => item_ !== item));
    this.onStop.emit(item);
  }


  /**
   * Update the loading item and send an event to all subscribers
   * @param item The item to update
   */
  update(item: ILoadingItem<any>): void {
    if (this.isLoading(item.source)) {
      this.onUpdate.emit(item);
    }
  }
}
