import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedfilterPipe } from './completedfilter.pipe';



@NgModule({
  declarations: [CompletedfilterPipe],
  exports:[
    CompletedfilterPipe
  ]
})
export class PipesModule { }
