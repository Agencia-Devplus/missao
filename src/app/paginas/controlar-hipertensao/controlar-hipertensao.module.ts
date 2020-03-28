import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlarHipertensaoPageRoutingModule } from './controlar-hipertensao-routing.module';

import { ControlarHipertensaoPage } from './controlar-hipertensao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlarHipertensaoPageRoutingModule
  ],
  declarations: [ControlarHipertensaoPage]
})
export class ControlarHipertensaoPageModule {}
