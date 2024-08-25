import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryParamKey, QueryParamsStore } from '../stores/query-params.store';

@Injectable({ providedIn: 'root' })
export class InputsService {
  form = new FormGroup({
    [QueryParamKey.baseName]: new FormControl<string>('', Validators.required),
    [QueryParamKey.tableName]: new FormControl<string>('', Validators.required),
    [QueryParamKey.token]: new FormControl<string>('', Validators.required),
  });

  constructor(
    private queryParamsStore: QueryParamsStore,
  ) {
    for (const key in this.form.controls) {
      this.subscribeToValueChanges(this.form.controls[key as keyof typeof this.form.controls]);
    }
  }

  private subscribeToValueChanges(control: FormControl) {
    var name = this.getControlName(control) as QueryParamKey;
    this.queryParamsStore.queryParams[name].subscribe(queryParamValue => {
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
