import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColunaSaudavelPage } from './coluna-saudavel.page';

const routes: Routes = [
  {
    path: '',
    component: ColunaSaudavelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColunaSaudavelPageRoutingModule {}
