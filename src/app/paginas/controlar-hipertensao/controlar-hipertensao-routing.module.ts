import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlarHipertensaoPage } from './controlar-hipertensao.page';

const routes: Routes = [
  {
    path: '',
    component: ControlarHipertensaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlarHipertensaoPageRoutingModule {}
