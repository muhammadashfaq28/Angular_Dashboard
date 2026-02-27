import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true,
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return `No   `  + value;
  }

}
