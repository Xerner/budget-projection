import { Signal } from "@angular/core";
import { ILoadingItem } from "./ILoading";

export interface ILoadingService {
  isAnyLoading: Signal<boolean>;
  itemsLoading: Signal<ILoadingItem<any>[]>;

  start(item: ILoadingItem<any>): void;
  stop(item: ILoadingItem<any>): void;
  update(item: ILoadingItem<any>): void;
}
