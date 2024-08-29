import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QUERY_PARAM_KEYS, QueryParamKeys, QueryParamsStore } from '../../repos/common/angular/query-params';
import { IGlobalQueryParams } from '../settings/query-param-keys';

@Injectable({ providedIn: 'root' })
export class InputsService {
  apiForm = new FormGroup({
    [this.queryParams.baseName]: new FormControl<string>('', Validators.required),
    [this.queryParams.token]: new FormControl<string>('', Validators.required),
  });
  dashboardForm = new FormGroup({
    startingBalance: new FormControl<number>(0, Validators.required),
    startingDate: new FormControl<number>(0, Validators.required),
  });

  constructor(
    @Inject(QUERY_PARAM_KEYS) private queryParams: QueryParamKeys<IGlobalQueryParams>,
    private queryParamsStore: QueryParamsStore<IGlobalQueryParams>,
  ) {
    for (const key in this.apiForm.controls) {
      this.subscribeToValueChanges(this.apiForm.controls[key as keyof typeof this.apiForm.controls]);
    }
  }

  private subscribeToValueChanges(control: FormControl) {
    var name = this.getControlName(control) as keyof QueryParamKeys<IGlobalQueryParams>;
    this.queryParamsStore.queryParams.get(name)!.subscribe(queryParamValue => {
      if (queryParamValue != control.value) {
        control.setValue(queryParamValue);
      }
    });
    control.valueChanges.subscribe(value => {
      this.queryParamsStore.update(name, value);
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
