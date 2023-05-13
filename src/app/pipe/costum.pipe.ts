import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 
@Pipe({
  name: 'costum',
  pure: false
})
export class CostumPipe implements PipeTransform {

  transform(value: any): any {
    if(value!== undefined && value!== null){
      return _.uniqBy(value, 'nama_dosen');
  }
  return value;
  }

}
