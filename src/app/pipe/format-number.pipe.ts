import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  valueStr:string="";

  transform(value: any): number {
    console.log('FormatNumberPipe')
    return Number(value.toString().replace(',','.').replace(' ','').trim());
  }

}
