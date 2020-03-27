import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeAdolescentePage } from './saude-adolescente.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeAdolescentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeAdolescentePageRoutingModule {}
