import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddperguntaPage } from './addpergunta.page';

const routes: Routes = [
  {
    path: '',
    component: AddperguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddperguntaPageRoutingModule {}
