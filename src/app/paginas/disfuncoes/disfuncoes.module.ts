import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisfuncoesPageRoutingModule } from './disfuncoes-routing.module';

import { DisfuncoesPage } from './disfuncoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisfuncoesPageRoutingModule
  ],
  declarations: [DisfuncoesPage]
})
export class DisfuncoesPageModule {}
