import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: any){
    console.log(value)
    console.log(searchText)
    searchText = searchText.toLowerCase();
    if (searchText === '') {
      return value;
    }
    console.log(value)
    console.log(searchText)
    return value.filter((item: any) => {
      const title = item.title.toLowerCase();
      const description = item.note.toLowerCase();
      return title.includes(searchText)|| description.includes(searchText)
    })
  }
}
