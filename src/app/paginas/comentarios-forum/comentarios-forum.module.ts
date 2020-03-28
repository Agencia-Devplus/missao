import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentariosForumPageRoutingModule } from './comentarios-forum-routing.module';

import { ComentariosForumPage } from './comentarios-forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentariosForumPageRoutingModule
  ],
  declarations: [ComentariosForumPage]
})
export class ComentariosForumPageModule {}
