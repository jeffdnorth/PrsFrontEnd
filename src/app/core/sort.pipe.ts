import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[],  column: string = "id", isAsc: boolean = true): any[] {
    
    let sortFn = (a: any, b: any): number => {
      let x = (a[column] === "number") ? a[column] :a[column].toString().toLowerCase();
      let y = (b[column] === "number") ? b[column] :b[column].toString().toLowerCase();
      let sortResult = 0;

      // for Asc sequence
      if (x === y) {
        return 0;
      }
      if(x > y) { 
      sortResult = 1; 
      } else {
        sortResult = -1;
      }
      // for desc sequence
      if(isAsc === false) {
        sortResult *= -1;
      }
        return sortResult;
      
    };    
    return items.sort(sortFn);
  }

}

