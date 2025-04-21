import { FormControl, FormControlOptions, ValidatorFn } from "@angular/forms";
import { QueryParamsService } from "../services";
import { inject } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

/**
 * A custom FormControl that syncs its value with a query parameter.
 *
 * @template TControlValue - The type of the control's value.
 */
export class QueryParamControl<TControlValue> extends FormControl<TControlValue | null> {
  private _queryParamKey: string | null = null;
  get queryParamKey(): string | null {
    if (this._queryParamKey == null) {
      return this.getControlName();
    }
    return this._queryParamKey;
  }
  private route = inject(ActivatedRoute);

  /**
   * @param {TControlValue} [initialValue=null] - The initial value of the control.
   * @param {(value: string) => TControlValue} [valueConverter=null] - A function to convert the query param value to the control value.
   * @param {string} [queryParamKey=null] - The key of the query parameter to sync with.
   * @param {FormControlOptions & { nonNullable: true }} [options={ nonNullable: true }] - Options for the FormControl.
   */
  constructor(
    public readonly initialValue: TControlValue | null = null,
    _queryParamKey: string | null = null,
    public valueConverter: ((value: string) => TControlValue) | null = null,
    public readonly options: ValidatorFn | ValidatorFn[] | FormControlOptions | null = { nonNullable: true },
  ) {
    super(initialValue, options);
    this._queryParamKey = _queryParamKey;
    var queryParamService = inject(QueryParamsService);
    this.route.queryParamMap.subscribe(this.setControlValueFromQueryParam.bind(this));
    this.valueChanges.subscribe(this.setQueryParam.bind(this, queryParamService));
  }

  /**
   * Sets the control's value based on the query parameter value.
   *
   * @private
   * @param {string[]} paramValues - The values of the query parameter.
   */
  private setControlValueFromQueryParam(paramMap: ParamMap) {
    if (this.queryParamKey == null) {
      this._queryParamKey = this.getControlName();
    }
    var paramValues: string[] = paramMap.getAll(this.queryParamKey!);
    var paramValue = paramValues[0];
    var newControlValue: any = this.valueConverter === null ? paramValue : this.valueConverter(paramValue);
    if (this.shouldNotUpdateValue(newControlValue)) {
      return;
    }
    this.setValue(newControlValue);
  }

  private shouldNotUpdateValue(convertedParamValue: TControlValue) {
    return convertedParamValue === undefined || convertedParamValue === this.value;
  }

  /**
   * Updates the query parameter based on the control's value.
   *
   * @private
   * @param {QueryParamsService<any>} queryParamService - The service to update the query parameter.
   */
  private setQueryParam(queryParamService: QueryParamsService<any>) {
    var paramValue = queryParamService.params[this.queryParamKey!]()[0];
    if (paramValue === this.value) {
      return;
    }
    queryParamService.set(this.queryParamKey!, this.value);
  }

  /**
   * Gets the name of the control within its parent form group.
   *
   * @returns {string} The name of the control.
   * @throws Will throw an error if the control has no parent or if the name cannot be found.
   */
  getControlName(): string | null {
    var parent = this.parent
    if (parent == null) {
      return null;
    }
    var name = Object.entries(parent.controls).find(entry => entry[1] == this)?.[0]
    return name ?? null;
  }
}
