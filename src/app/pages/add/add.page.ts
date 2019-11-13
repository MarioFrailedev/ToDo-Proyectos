import { Component, OnInit, ɵConsole } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/model/list.moddel';
import { ListItem } from '../../model/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  description = '';

  constructor( private todoService: TodosService, private router:ActivatedRoute) { 
    const listId = this.router.snapshot.paramMap.get('listId');

    this.list = this.todoService.getList( listId );
    
  
  }

  ngOnInit() {
  }

  addItem() {
    if( this.description.length === 0) {
      return;
    }

    const item = new ListItem( this.description );
    this.list.items.push( item );

    this.description = '';
    this.todoService.saveStorage();
    
  }

  checkStatus( item: ListItem ) {
    const pending = this.list.items
                          .filter( itemData => !itemData.completed).length;

    if ( pending === 0) {
      this.list.dateCompleted = new Date();
      this.list.completed = true;
    }else {
      this.list.dateCompleted = null;
      this.list.completed = false;
    }
    this.todoService.saveStorage();

  }

  deleteItem(i: number){

    this.list.items.splice(i, 1);
    this.todoService.saveStorage();
  }
}
