import { FormControl } from "@angular/forms";

export type InterfaceForm<T> = {
  [key in keyof T]: FormControl<any>;
}
