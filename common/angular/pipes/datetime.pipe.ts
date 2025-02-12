import { Pipe, type PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'datetime',
  standalone: true,
})
export class DateTimePipe implements PipeTransform {
  transform(value: DateTime | string, ...args: unknown[]): unknown {
    if (value === null) {
      return '';
    }
    if (typeof value === 'string') {
      value = DateTime.fromISO(value);
    }
    return value.toLocaleString(DateTime.DATE_SHORT);
  }
}
