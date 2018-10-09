/* import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'utcToLocal'
})
export class UtcToLocal implements PipeTransform {

    constructor(private datePipe: DatePipe) { }

    transform(value: any, format: any): string {
        if (value === null || value === undefined) { return null; }
        if (value.indexOf('Z') === -1) {
            value += 'Z';
        }
        return this.datePipe.transform(new Date(value), format);
    }
}
 */
