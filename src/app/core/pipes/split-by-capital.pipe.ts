/* import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitByCapital'
})
export class SplitByCapitalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let split;
      if (Array.isArray(value)) {
        split = value.join(',');
      } else {
        split = value;
      }
      split = split.replace(/([a-z])([A-Z])/g, '$1 $2');
      split = split.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
      return split;
    }
  }

} */
