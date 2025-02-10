import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, Inject, Injectable } from '@angular/core';
import { LOADING_SERVICE_TOKEN, LoadingService } from 'common/angular/services/loading';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ILoadingItem } from 'common/angular/services/loading/ILoading';
import { LoadingToastComponent } from 'components/snackbar/loading-toast/loading-toast.component';
import Toastify from 'toastify-js';
import { HttpRequest } from '@angular/common/http';

export const SNACKBAR_CONFIG: MatSnackBarConfig = {
  horizontalPosition: "right",
  verticalPosition: "bottom",
}

export interface IToast<T = any> {
  toast: ReturnType<typeof Toastify>;
  component: ComponentRef<T>;
}

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  constructor(
    @Inject(LOADING_SERVICE_TOKEN) protected loadingService: LoadingService,
    public snackbar: MatSnackBar,
    private envInjector: EnvironmentInjector,
    private applicationRef: ApplicationRef,
  ) {
    this.loadingService.onStart.subscribe(this.onLoadingStart.bind(this));
    this.loadingService.onStop.subscribe(this.onLoadingStop.bind(this));
  }

  loadingFilter = (item: ILoadingItem<any>) => item.context?.request instanceof HttpRequest;

  toasts = new Map<ILoadingItem, IToast>();

  startLoadingToast<T>(source: string, context: T) {
    this.onLoadingStart({ source, context });
  }

  stopLoadingToast<T>(source: string, context: T) {
    this.onLoadingStop({ source, context });
  }

  onLoadingStart<T>(itemLoading: ILoadingItem<T>) {
    if (this.loadingFilter(itemLoading)) {
      return;
    }
    var node = createComponent(LoadingToastComponent, { environmentInjector: this.envInjector });
    var toast = Toastify({
      node: node.location.nativeElement,
      duration: -1,
      close: false,
      gravity: 'bottom',
      position: 'right',
      style: {
        background: 'var(--mat-sys-surface)',
      },
    });
    this.applicationRef.attachView(node.hostView);
    node.setInput("message", itemLoading.source);
    node.setInput("toast", toast);
    this.toasts.set(itemLoading, { toast, component: node });
    toast.showToast();
  }

  onLoadingStop<T>(itemLoading: ILoadingItem<T>) {
    if (this.loadingFilter(itemLoading)) {
      return;
    }
    if (this.toasts.has(itemLoading) == false) {
      return;
    }
    var toast = this.toasts.get(itemLoading)!;
    if (toast.component !== undefined) {
      toast.component.setInput("progress", 100);
    }
    setTimeout(() => {
      toast.toast.hideToast();
      this.toasts.delete(itemLoading);
    }, 3000);
  }
}
