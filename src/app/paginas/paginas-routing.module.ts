import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './painel/painel.module#PainelPageModule'
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'forum',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./forum/forum.module').then(m => m.ForumPageModule)
          }
        ]
      },
      {
        path: 'dizimo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./dizimo/dizimo.module').then(m => m.DizimoPageModule)
          }
        ]
      },{
        path: 'noticias',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./noticias/noticias.module').then(m => m.NoticiasPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
    ]
  },
  {
    path: 'forum-popover',
    loadChildren: () => import('./forum-popover/forum-popover.module').then(m => m.ForumPopoverPageModule)
  },/*
  {
    path: 'registro-moderador',
    loadChildren: () => import('./registro-moderador/registro-moderador.module').then( m => m.RegistroModeradorPageModule)
  }

   {
    path: 'dizimo',
    loadChildren: () => import('./dizimo/dizimo.module').then( m => m.DizimoPageModule)
  }, */


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }