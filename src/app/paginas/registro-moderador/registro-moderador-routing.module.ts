import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroModeradorPage } from './registro-moderador.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroModeradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroModeradorPageRoutingModule {}
