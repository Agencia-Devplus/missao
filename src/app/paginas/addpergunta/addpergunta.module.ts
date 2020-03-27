import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddperguntaPageRoutingModule } from './addpergunta-routing.module';
import { AddperguntaPage } from './addpergunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddperguntaPageRoutingModule
  ],
  declarations: [AddperguntaPage]
})
export class AddperguntaPageModule {}
