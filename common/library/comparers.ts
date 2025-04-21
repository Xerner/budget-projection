export type LooseValue = string | number | boolean | ReadonlyArray<string | number | boolean> | object | null | undefined;

export class ComparerService {
  areBasicallyEqual(value1: LooseValue, value2: LooseValue): boolean {
    var value1HasValue = this.hasAnyValue(value1);
    var value2HasValue = this.hasAnyValue(value2);
    if (value1HasValue === false && value2HasValue === false) {
      return true;
    }
    if (value1HasValue !== value2HasValue) {
      return false;
    }
    var isValue1AnArray = Array.isArray(value1);
    var isValue2AnArray = Array.isArray(value2);
    if (isValue1AnArray && isValue2AnArray) {
      var array1 = value1 as ReadonlyArray<LooseValue>;
      var array2 = value2 as ReadonlyArray<LooseValue>;
      return array1.length === array2.length && array1.every((value, index) => {
        return this.areBasicallyEqual(value, array2[index]);
      });
    }
    var isValue1Object = Array.isArray(value1) === false && typeof value1 === "object";
    var isValue2Object = Array.isArray(value2) === false && typeof value2 === "object";
    if (isValue1Object && isValue2Object) {
      var object1 = value1 as Record<string | number | symbol, any>;
      var object2 = value2 as Record<string | number | symbol, any>;
      return Object.entries(object1).every(entry => {
        var matchingEntriesValue = object2[entry[0]];
        return this.areBasicallyEqual(entry[1], matchingEntriesValue);
      });
    }
    return value1 === value2;
  }

  /**
   * Checks if the given value has any "meaningful" value.
   *
   * @example
   * hasAnyValue(null); // false
   * hasAnyValue(undefined); // false
   * hasAnyValue(""); // false
   * hasAnyValue([]); // false
   * hasAnyValue({}); // false
   * hasAnyValue([null]); // false
   * hasAnyValue({ key: "" }); // false
   * hasAnyValue({ key1: "", key2: "hello world" }); // true
   * hasAnyValue({ key: { anotherKey: null } }); // false
   * hasAnyValue({ key: "value" }); // true
   * hasAnyValue({ key: { anotherKey: false } }); // true
   * hasAnyValue([false]); // true
   * hasAnyValue("hello world"); // true
   *
   * @param {LooseValue} value - The value to check.
   * @returns {boolean} - Returns true if the value has any "meaningful" value, otherwise false.
   */
  hasAnyValue(value: LooseValue): boolean {
    if (Array.isArray(value)) {
      return value.some(param => {
        return this.hasAnyValue(param);
      });
    }
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === "boolean") {
      return true;
    }
    if (typeof value === "number") {
      return true;
    }
    if (typeof value === "string") {
      return value !== "";
    }
    var isObjectAndNotNull = typeof value === "object" && value !== null;
    if (isObjectAndNotNull) {
      if (Object.keys(value).length === 0) {
        return false;
      }
      return this.hasAnyValue(Object.values(value));
    }
    return true;
  }
}

export const COMPARERS = new ComparerService()
