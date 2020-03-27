import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutricaoPageRoutingModule } from './nutricao-routing.module';

import { NutricaoPage } from './nutricao.page';
import { CompartilhadoModule } from 'src/app/compartilhado/compartilhado.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutricaoPageRoutingModule,
    CompartilhadoModule
  ],
  declarations: [NutricaoPage]
})
export class NutricaoPageModule {}
