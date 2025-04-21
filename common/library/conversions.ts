export class ConversionsService {
  toPercentageString(num: number) {
    return `${num * 100}%`;
  }

  strToNumber(percent: string) {
    const percentAsNumber: number = parseInt(percent.replace('%', '')) / 100;
    return percentAsNumber;
  }
}

export const CONVERSIONS = new ConversionsService();
