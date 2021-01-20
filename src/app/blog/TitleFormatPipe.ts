import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'format'
})
export class TitleFormatPipe implements PipeTransform {
    public transform(input: string): string {
        if (!input) {
            return '';
        } else {
            return input.split(' ').join('_');
        }
    }
}
