import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  
})
export class Tab1Page {

  constructor( public todoService: TodosService,
               private router:Router,
               private alertCtrl:AlertController ) {

  }

  async addList() {
    //this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertCtrl.create({
      header: 'Nuevo Proyecto',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: ' Nombre del Proyecto'
        }
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () =>{
          console.log('cancelar')
        } 
      },
      {
        text: 'Crear',
        handler: ( data ) => {
          console.log( data );
          if( data.title.length === 0){
            return;
          }
          const listId = this.todoService.createList( data.title );
          
          //crear la lista
          this.router.navigateByUrl(`/tabs/tab1/add/${ listId }`);
        }
      }]
    });
     alert.present();

  }

}
