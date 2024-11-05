import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGlobalQueryParams } from '../settings/query-param-keys';
import { QueryParamsService } from '../common/angular/services/query-params/query-params.service';
import { QueryParamKeys } from '../common/angular/services/query-params/types/QueryParamKeys';

@Injectable({ providedIn: 'root' })
export class InputsService {
  apiForm = new FormGroup({
    [this.queryParamsStore.keys.baseName]: new FormControl<string>('', Validators.required),
    [this.queryParamsStore.keys.token]: new FormControl<string>('', Validators.required),
  });
  dashboardForm = new FormGroup({
    startingBalance: new FormControl<number>(0, Validators.required),
    startingDate: new FormControl<number>(0, Validators.required),
  });

  constructor(
    private queryParamsStore: QueryParamsService<IGlobalQueryParams>,
  ) {
    for (const key in this.apiForm.controls) {
      this.subscribeToValueChanges(this.apiForm.controls[key as keyof typeof this.apiForm.controls]);
    }
  }

  private subscribeToValueChanges(control: FormControl) {
    var name = this.getControlName(control) as keyof QueryParamKeys<IGlobalQueryParams>;
    this.queryParamsStore.observables[name]!.subscribe(queryParamValue => {
      if (queryParamValue != control.value) {
        control.setValue(queryParamValue);
      }
    });
    control.valueChanges.subscribe(value => {
      this.queryParamsStore.set(name, value);
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
