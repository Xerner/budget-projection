import { WritableSignal } from "@angular/core";

export interface IRequestCounter {
  requestCounter: WritableSignal<number>;
}
