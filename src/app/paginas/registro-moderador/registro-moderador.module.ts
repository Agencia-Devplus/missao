import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroModeradorPageRoutingModule } from './registro-moderador-routing.module';

import { RegistroModeradorPage } from './registro-moderador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroModeradorPageRoutingModule
  ],
  declarations: [RegistroModeradorPage]
})
export class RegistroModeradorPageModule {}
