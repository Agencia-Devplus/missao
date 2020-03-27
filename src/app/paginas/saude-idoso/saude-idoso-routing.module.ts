import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeIdosoPage } from './saude-idoso.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeIdosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeIdosoPageRoutingModule {}
