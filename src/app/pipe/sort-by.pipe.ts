import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 
@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any): any {
    if(value!== undefined && value!== null){
      return _.orderBy(value, 'pertemuan_ke', 'asc');
  }
  return value;
  }

}
