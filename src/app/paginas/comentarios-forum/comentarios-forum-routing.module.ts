import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentariosForumPage } from './comentarios-forum.page';

const routes: Routes = [
  {
    path: '',
    component: ComentariosForumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentariosForumPageRoutingModule {}
