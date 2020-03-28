import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColunaSaudavelPageRoutingModule } from './coluna-saudavel-routing.module';

import { ColunaSaudavelPage } from './coluna-saudavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColunaSaudavelPageRoutingModule
  ],
  declarations: [ColunaSaudavelPage]
})
export class ColunaSaudavelPageModule {}
