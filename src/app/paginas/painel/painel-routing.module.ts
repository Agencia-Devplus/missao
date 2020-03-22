import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelPage } from './painel.page';

const routes: Routes = [
  {
    path: 'painel',
    component: PainelPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'forum',
        children: [
          {
            path: '',
            loadChildren: () => import('../forum/forum.module').then(m => m.ForumPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/painel/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/painel/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainelPageRoutingModule { }
