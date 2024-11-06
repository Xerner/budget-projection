import { Injectable, signal } from '@angular/core';

export interface IError {
  name: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  errors = signal<IError[]>([]);

  addError(error: IError) {
    this.errors.update(errors => [...errors, error]);
  }

  removeError(error: IError) {
    this.errors.update(errors => errors.filter(error_ => error_ !== error));
  }
}