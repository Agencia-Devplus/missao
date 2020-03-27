import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApoiadoresPageRoutingModule } from './apoiadores-routing.module';

import { ApoiadoresPage } from './apoiadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApoiadoresPageRoutingModule
  ],
  declarations: [ApoiadoresPage]
})
export class ApoiadoresPageModule {}
