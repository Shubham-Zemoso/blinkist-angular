import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/constants';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(value: Book[], filterString: string, propName: string): Book[] {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray: Book[] = [];
    for (const item of value) {
      if (
        item[propName].toLowerCase().includes(filterString.toLowerCase()) ||
        item.author.toLowerCase().includes(filterString.toLowerCase())
      ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
