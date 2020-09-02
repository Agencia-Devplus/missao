import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DizimoPageRoutingModule } from './dizimo-routing.module';

import { DizimoPage } from './dizimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DizimoPageRoutingModule
  ],
  declarations: [DizimoPage]
})
export class DizimoPageModule {}
