import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutricaoPage } from './nutricao.page';

const routes: Routes = [
  {
    path: '',
    component: NutricaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutricaoPageRoutingModule {}
