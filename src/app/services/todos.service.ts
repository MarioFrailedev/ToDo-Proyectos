import { Injectable } from '@angular/core';
import { List } from '../model/list.moddel';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  lists: List[] = [];

  constructor() {
    
    this.getStorage();

    /* const list1 = new List('Backend goLatinTravel');
    const list2 = new List('Backend Dasboard');
    const list3 = new List('Dasboard goLatinTravel');
    const list4 = new List('Dasboard goLatinTravel');
    const list5 = new List('App Vallartazo');
    const list6 = new List('App goLatinTravel');

    this.lists.push(list1,list2,list3,list4,list5,list6 ); */

    
   }

   createList( title: string ) {
    const newList = new List(title);
    this.lists.push( newList );
    this.saveStorage();

    return newList.id;

   }

   deleteList( list: List) {

   this.lists = this.lists.filter( listData => listData.id !== list.id);
   this.saveStorage();
   }

   getList( id: string | number ) {
     id = Number(id);
     return this.lists.find( listData => listData.id === id);
   }

   saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
   }

   getStorage() {

    if( localStorage.getItem('data')) {
      
      this.lists = JSON.parse( localStorage.getItem('data'));
      

    }else{
      this.lists = [];
    }
   }
}
