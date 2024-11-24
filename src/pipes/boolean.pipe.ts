import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean',
  standalone: true,
})
export class BooleanPipe implements PipeTransform {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  transform(value: boolean, applyTailwindClasses: boolean = true): string {
    if (applyTailwindClasses) {
      this.elementRef.nativeElement.parentElement?.classList.add(
        "rounded-full",
        "flex",
        "justify-center",
        "items-center",
        "px-2",
        "py-1",
        "w-12",
        value ? 'bg-green-100' : 'bg-red-100',
        value ? 'text-green-500' : 'text-red-500',
      );
    }
    if (value) {
      return '✓';
    }
    return '✗';
  }
}
