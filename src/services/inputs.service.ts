import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class InputsService {
  form = new FormGroup({
    baseName: new FormControl<string>('', Validators.required),
    tableName: new FormControl<string>('', Validators.required),
  });

  constructor(

  ) { }
}
