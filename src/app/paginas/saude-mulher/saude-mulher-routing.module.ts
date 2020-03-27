import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeMulherPage } from './saude-mulher.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeMulherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeMulherPageRoutingModule {}
