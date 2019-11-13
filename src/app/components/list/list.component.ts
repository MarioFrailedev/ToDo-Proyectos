import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Router } from '@angular/router';
import { List } from 'src/app/model/list.moddel';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

 @ViewChild(IonList, {static: false}) list: IonList;
  @Input( )completed = true;

  constructor(public todoService: TodosService,
              private router:Router,
              private alertCtrl:AlertController) { }
            
  listSelected( list: List ) {

    if( this.completed ){

      this.router.navigateByUrl(`/tabs/tab2/add/${ list.id }`);
    }else {
      this.router.navigateByUrl(`/tabs/tab1/add/${ list.id }`);
    }
   }

  ngOnInit() {}

  deleteList( item: List ) {
    this.todoService.deleteList( item) ;
  }
  async editName(item: List) {
    const alert = await this.alertCtrl.create({
      header: 'Editar titulo',
      inputs: [
        {
          name: 'title',
          value: item.title,
          type: 'text',
          placeholder: ' Nombre del Feature'
        }
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () =>{
          console.log('cancelar');
          this.list.closeSlidingItems();
        } 
      },
      {
        text: 'Actulizar',
        handler: ( data ) => {
          console.log( data );
          if( data.title.length === 0){
            return;
          }
          item.title = data.title; 
          this.todoService.saveStorage();
          
         
        }
      }]
    });
     alert.present();
  }

}
