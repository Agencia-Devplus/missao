import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeCriancaPage } from './saude-crianca.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeCriancaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeCriancaPageRoutingModule {}
