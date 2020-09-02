import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DizimoPage } from './dizimo.page';

const routes: Routes = [
  {
    path: '',
    component: DizimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DizimoPageRoutingModule {}
