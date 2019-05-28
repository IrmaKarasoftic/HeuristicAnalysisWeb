/* import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const regexp = /[A-Z][a-z]+|[0-9]+/g;
    const valueKeys = Object.keys(value);

    return valueKeys
      .filter(enumMember => !isNaN(Number(enumMember, 10)))
      .map(enumMember => {
        return {
          key: Number(enumMember, 10),
          value: value[enumMember].match(regexp).join(' ')
        };
      });
  }
}
 */
