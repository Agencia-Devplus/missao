import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeIdosoPageRoutingModule } from './saude-idoso-routing.module';

import { SaudeIdosoPage } from './saude-idoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeIdosoPageRoutingModule
  ],
  declarations: [SaudeIdosoPage]
})
export class SaudeIdosoPageModule {}
