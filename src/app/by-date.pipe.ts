import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byDate'
})
export class ByDatePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( (it) => {
      return it.date.toString().includes(searchText);
    });
   }

}
