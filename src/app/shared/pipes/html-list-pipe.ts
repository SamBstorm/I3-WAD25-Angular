import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlList',
})
export class HtmlListPipe implements PipeTransform {
  transform(value: string[], listType : string = 'ul'): string {
    if(listType != 'ul' && listType != 'ol') throw new TypeError('La liste ne peut être que OL ou UL.');
    let result : string = `<${listType}>`;
    for (const text of value) {
      result += `<li>${text}</li>`
    }
    result += `</${listType}>`;
    return result;
  }
}
