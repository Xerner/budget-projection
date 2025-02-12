export class MathService {
  clamp(value: number, lower: number, upper: number): number {
    if (value < lower) {
      return lower
    } else if (value > upper) {
      return upper;
    } else {
      return value;
    }
  }

  randomInt(exclusiveMax: number): number {
    return Math.floor(Math.random() * exclusiveMax);
  }

  sum(array: number[]) {
    return array.reduce(function (a: number, b: number) {
      return a + b;
    }, 0);
  }

  normalize(value: number, min: number, max: number, alwaysPositive: boolean = false): number {
    if (alwaysPositive) {
      return this.clamp(value - min, 0, Number.MAX_SAFE_INTEGER) / (max - min);
    }
    return (value - min) / (max - min);
  }

  denormalize(value: number, min: number, max: number, alwaysPositive: boolean = false): number {
    if (alwaysPositive) {
      return this.clamp(value * (max - min) + min, 0, Number.MAX_SAFE_INTEGER);
    }
    return value * (max - min) + min;
  }

  addPercentageStrings(percent1: string, percent2: string) {
    const percent1Num = parseInt(percent1.replace('%', ''));
    const percent2Num = parseInt(percent2.replace('%', ''));
    const sum = percent1Num + percent2Num;
    return `${sum}%`;
  }

  toPercentageString(num: number) {
    return `${num * 100}%`;
  }

  strToNumber(percent: string) {
    const percentAsNumber: number = parseInt(percent.replace('%', '')) / 100;
    return percentAsNumber;
  }
}

export const MATH = new MathService();
