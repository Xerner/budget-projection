import { Injectable, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGlobalQueryParams } from '../models/GlobalQueryParams';
import { InterfaceForm } from '../common/angular/types';
import { DateTime } from 'luxon';
import { QueryParamControl } from '../common/angular/controls/QueryParamControl';

@Injectable({ providedIn: 'root' })
export class InputsService {
  apiForm = new FormGroup<InterfaceForm<IGlobalQueryParams>>({
    token: new QueryParamControl<string>('', null, null, Validators.required),
    baseName: new QueryParamControl<string>('', null, null, Validators.required),
    transactionTableName: new QueryParamControl<string>('', null, null, Validators.required),
    plannedTransactionTableName: new QueryParamControl<string>('', null, null, Validators.required),
    accountsTableName: new QueryParamControl<string>('', null, null, Validators.required),
    startingDate: new QueryParamControl<DateTime | null>(null, null, DateTime.fromISO, Validators.required),
    endingDate: new QueryParamControl<DateTime | null>(null, null, DateTime.fromISO, Validators.required),
  });
  startingDate = signal<DateTime | null>(null);
  endingDate = signal<DateTime | null>(null);
  currentlySelectedBase = signal<string>('');

  constructor() {
    this.apiForm.controls.startingDate.valueChanges.subscribe(date => {
      this.startingDate.set(date);
    });
    this.apiForm.controls.endingDate.valueChanges.subscribe(date => {
      this.endingDate.set(date);
    });
  }

  /**
   * Gets the name of the control within its parent form group.
   *
   * @returns {string} The name of the control.
   * @throws Will throw an error if the control has no parent or if the name cannot be found.
   */
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
