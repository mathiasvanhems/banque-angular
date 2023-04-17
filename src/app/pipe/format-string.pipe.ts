import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString'
})
export class FormatStringPipe implements PipeTransform {

  transform(value: string): string {
    console.log('FormatStringPipe')
    return value.trim().replace('--','');
  }

}
