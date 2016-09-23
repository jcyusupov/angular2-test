import {Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
  name: 'search'
})
@Injectable()
export class SearchPipe implements PipeTransform {
  transform(items: any[], args: {}): any[] {
    return items;
  }
}
