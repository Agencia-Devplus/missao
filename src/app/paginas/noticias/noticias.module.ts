import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasPageRoutingModule } from './noticias-routing.module';

import { NoticiasPage } from './noticias.page';

import { AddNoticiaPage } from 'src/app/compartilhado/modals/add-noticia/add-noticia.page'
import { FileSizeFormatPipe } from 'src/app/compartilhado/modals/add-noticia/file-size-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasPageRoutingModule
  ],
  declarations: [NoticiasPage, AddNoticiaPage, FileSizeFormatPipe],
  entryComponents: [AddNoticiaPage] //modal
})
export class NoticiasPageModule {}
