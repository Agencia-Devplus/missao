import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeAdolescentePageRoutingModule } from './saude-adolescente-routing.module';

import { SaudeAdolescentePage } from './saude-adolescente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeAdolescentePageRoutingModule
  ],
  declarations: [SaudeAdolescentePage]
})
export class SaudeAdolescentePageModule {}
