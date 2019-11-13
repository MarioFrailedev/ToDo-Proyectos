import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../model/list.moddel';

@Pipe({
  name: 'completedfilter',
  pure: false
})
export class CompletedfilterPipe implements PipeTransform {

  transform(lists: List[], completed: boolean = true ): List[] {
    return lists.filter( listData =>  listData.completed === completed);
  }

}
