import { Inject, Injectable } from '@angular/core';
import { LOADING_SERVICE_TOKEN, LoadingService } from 'common/angular/services/loading';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { ILoadingItem } from 'common/angular/services/loading/ILoading';
import { ILoadingToastData, LoadingToastComponent } from 'components/snackbar/loading-toast/loading-toast.component';

export const SNACKBAR_CONFIG: MatSnackBarConfig = {
  horizontalPosition: "right",
  verticalPosition: "bottom",
}

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  constructor(
    @Inject(LOADING_SERVICE_TOKEN) protected loadingService: LoadingService,
    public snackbar: MatSnackBar,
  ) { }

  loadingToastSnackbarRef: MatSnackBarRef<LoadingToastComponent> | null = null;

  startLoadingToast(source: string) {
    this.onLoadingStart({ source, context: null });
  }

  stopLoadingToast(source: string) {
    this.onLoadingStop({ source, context: null });
  }

  onLoadingStart<T>(itemLoading: ILoadingItem<T>) {
    var loadingToastInput: ILoadingToastData = {
      message: 'Fetching ' + itemLoading.source,
      mode: 'indeterminate',
    }
    var snackbarRef = this.snackbar.openFromComponent(LoadingToastComponent, { ...SNACKBAR_CONFIG, data: { data: loadingToastInput } });
    this.loadingToastSnackbarRef = snackbarRef;
  }

  onLoadingStop<T>(itemLoading: ILoadingItem<T>) {
    var snackbarRef = this.loadingToastSnackbarRef;
    if (snackbarRef === null) {
      return;
    }
    var loadingToast = snackbarRef.instance;
    loadingToast.data.progress = 100;
  }
}
