import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGlobalQueryParams } from '../models/query-param-keys';
import { QueryParamsService } from '../common/angular/services/query-params/query-params.service';
import { InterfaceForm } from '../common/angular/types';
import { AirtableService } from './airtable/airtable.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TOKEN_SERVICE, ITokenService } from '../common/angular/interceptors';

@Injectable({ providedIn: 'root' })
export class InputsService {
  apiForm = new FormGroup<InterfaceForm<IGlobalQueryParams>>({
    token: new FormControl<string>('', Validators.required),
    baseName: new FormControl<string>('', Validators.required),
    transactionTableName: new FormControl<string>('', Validators.required),
  });
  dashboardForm = new FormGroup({
    startingBalance: new FormControl<number>(0, Validators.required),
    startingDate: new FormControl<number>(0, Validators.required),
  });

  currentlySelectedBase = toSignal(this.apiForm.controls.baseName.valueChanges);

  onControlChanges: Record<keyof IGlobalQueryParams, (value: any) => void> = {
    token: (token) => {
      this.tokenService.setToken(token);
      this.airtableService.fetchBases()
    },
    baseName: (baseName) => this.airtableService.fetchBaseSchema(baseName),
    transactionTableName: (_) => null,
  };

  constructor(
    private queryParams: QueryParamsService<IGlobalQueryParams>,
    private airtableService: AirtableService,
    @Inject(TOKEN_SERVICE) private tokenService: ITokenService,
  ) {
    for (const key in this.apiForm.controls) {
      var control = this.apiForm.controls[key as keyof typeof this.apiForm.controls];
      var name = this.getControlName(control) as keyof IGlobalQueryParams;
      this.subscribeToSpecificValueChanges(control, name);
      this.subscribeToUniversalValueChanges(control, name);
    }
  }

  private subscribeToSpecificValueChanges(control: FormControl, key: keyof IGlobalQueryParams) {
    control.valueChanges.subscribe(this.onControlChanges[key].bind(this));
  }

  private subscribeToUniversalValueChanges(control: FormControl, key: keyof IGlobalQueryParams) {
    this.setControlValueToQueryParamSubscription(control, key);
    this.setQueryParamToControlValueSubscription(control, key);
  }

  private setControlValueToQueryParamSubscription(control: FormControl, key: keyof IGlobalQueryParams) {
    return this.queryParams.observables[key]!.subscribe(paramValue => {
      if (paramValue[0] === control.value) {
        return;
      }
      control.setValue(paramValue);
    });
  }

  private setQueryParamToControlValueSubscription(control: FormControl, key: keyof IGlobalQueryParams) {
    return control.valueChanges.subscribe(() => {
      var paramValue = this.queryParams.params[key]()[0]
      if (paramValue === control.value) {
        return;
      }
      this.queryParams.set(key, control.value);
    });
  }

  getControlName(control: FormControl): string {
    var parent = control.parent
    if (parent == null) {
      throw new Error("This control has no parent! There's no way to know what name it has")
    }
    var name = Object.entries(parent.controls).find(entry => entry[1] == control)?.[0]
    if (name == undefined) {
      throw new Error("Could not find the name of the control")
    }
    return name;
  }
}
