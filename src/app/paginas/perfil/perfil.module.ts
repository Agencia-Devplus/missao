import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { CompartilhadoModule } from 'src/app/compartilhado/compartilhado.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    CompartilhadoModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
