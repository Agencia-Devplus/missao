import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevencaoDenguePage } from './prevencao-dengue.page';

const routes: Routes = [
  {
    path: '',
    component: PrevencaoDenguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevencaoDenguePageRoutingModule {}
