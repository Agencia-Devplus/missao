import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeMulherPageRoutingModule } from './saude-mulher-routing.module';

import { SaudeMulherPage } from './saude-mulher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeMulherPageRoutingModule
  ],
  declarations: [SaudeMulherPage]
})
export class SaudeMulherPageModule {}
