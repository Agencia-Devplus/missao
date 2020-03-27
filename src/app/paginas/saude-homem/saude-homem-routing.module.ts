import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeHomemPage } from './saude-homem.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeHomemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeHomemPageRoutingModule {}
