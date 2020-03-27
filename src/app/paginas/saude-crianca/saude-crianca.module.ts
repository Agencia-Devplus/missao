import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeCriancaPageRoutingModule } from './saude-crianca-routing.module';

import { SaudeCriancaPage } from './saude-crianca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeCriancaPageRoutingModule
  ],
  declarations: [SaudeCriancaPage]
})
export class SaudeCriancaPageModule {}
