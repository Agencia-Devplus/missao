import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeHomemPageRoutingModule } from './saude-homem-routing.module';

import { SaudeHomemPage } from './saude-homem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeHomemPageRoutingModule
  ],
  declarations: [SaudeHomemPage]
})
export class SaudeHomemPageModule {}
