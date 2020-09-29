import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customData'
})
export class CustomDataPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
