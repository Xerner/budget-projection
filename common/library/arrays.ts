import { MATH } from './math'

export type ComparerFunction<T> = (x1: T, x2: T) => number;

export class ArrayService {
  /**
     *
     * @param array An array of numbers
     * @returns The maximum value in the array
     */
  arrayMax(array: number[]) {
    return array.reduce(function (a: number, b: number) {
      return Math.max(a, b);
    }, 0);
  }

  randomArrayItem<T>(array: T[]) {
    return array[MATH.randomInt(array.length)];
  }

  fillSparseArray<T>(array: T[], length: number, fillValue: T) {
    return Array.from({ length }, (_, i) => array[i] ?? fillValue);
  }

  distinct<T>(array: T[]) {
    return [...new Set(array)];
  }

  /**
   * Sorts the array in ascending order and ensures every item is contiguous without having a value of more than 1 difference between two entries. Does not sort the provided array in place
   * @param array The source array
   * @param comparer A function that compares two values and returns the difference between. Used to sort the array and determine the gap between two values
   * @param modifier A function that takes a value and returns a new value that is contiguous to the previous value
   * @returns A new sorted array with contiguous values
   */
  sortAndFillGaps<T>(array: T[], comparer: ComparerFunction<T>, modifier: (x: T) => T): T[] {
    if (array.length === 0) return [];
    var sortedArray = [...array].sort(comparer);
    const result = [array[0]];
    for (let i = 0; i < sortedArray.length - 1; i++) {
      const prev = array[i];
      const current = array[i + 1];
      var diff = comparer(current, prev);
      for (let i = 1; i < diff; i++) {
        result.push(modifier(prev));
      }
      result.push(current);
    }
    return result;
  }
}

export const ARRAY = new ArrayService();
