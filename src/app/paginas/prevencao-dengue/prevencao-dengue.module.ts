import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevencaoDenguePageRoutingModule } from './prevencao-dengue-routing.module';

import { PrevencaoDenguePage } from './prevencao-dengue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevencaoDenguePageRoutingModule
  ],
  declarations: [PrevencaoDenguePage]
})
export class PrevencaoDenguePageModule {}
