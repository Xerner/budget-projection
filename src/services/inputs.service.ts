import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGlobalQueryParams, QueryParams } from '../settings/query-param-keys';
import { QueryParamsService } from '../common/angular/services/query-params/query-params.service';
import { QueryParamKeys } from '../common/angular/services/query-params/types/QueryParamKeys';
import { InterfaceForm } from '../common/angular/types';
import { AirtableService } from './airtable/airtable.service';

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

  onControlChanges: Record<keyof IGlobalQueryParams, (value: any) => void> = {
    baseName: (baseName) => this.airtableService.fetchBaseSchema(baseName),
    token: (baseName) => this.airtableService.fetchBases(),
    transactionTableName: (baseName) => null,
  };

  constructor(
    private queryParams: QueryParamsService<IGlobalQueryParams>,
    private airtableService: AirtableService,
  ) {
    for (const key in this.apiForm.controls) {
      var control = this.apiForm.controls[key as keyof typeof this.apiForm.controls];
      control.valueChanges.subscribe(this.onControlChanges[key as keyof IGlobalQueryParams].bind(this));
      this.subscribeToValueChanges(control);
    }
  }

  private subscribeToValueChanges(control: FormControl) {
    var name = this.getControlName(control) as keyof QueryParamKeys<IGlobalQueryParams>;
    this.queryParams.observables[name]!.subscribe(queryParamValue => {
      if (queryParamValue != control.value) {
        control.setValue(queryParamValue, { emitEvent: false });
      }
    });
    control.valueChanges.subscribe(value => {
      this.queryParams.set(name, value);
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
