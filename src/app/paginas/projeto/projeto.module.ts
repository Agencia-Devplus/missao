import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetoPageRoutingModule } from './projeto-routing.module';

import { ProjetoPage } from './projeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetoPageRoutingModule
  ],
  declarations: [ProjetoPage]
})
export class ProjetoPageModule {}
