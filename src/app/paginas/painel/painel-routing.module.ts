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
      },{
        path: 'noticias',
        children: [
          {
            path: '',
            loadChildren: () => import('../noticias/noticias.module').then(m => m.NoticiasPageModule)
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
        path: 'addpergunta',
        children: [
          {
            path: '',
            loadChildren: () => import('../addpergunta/addpergunta.module').then(m => m.AddperguntaPageModule)
          }
        ]
      },
      {
        path: 'projeto',
        children: [
          {
            path: '',
            loadChildren: () => import('../projeto/projeto.module').then(m => m.ProjetoPageModule)
          }
        ]
      },
      {
        path: 'apoiadores',
        children: [
          {
            path: '',
            loadChildren: () => import('../apoiadores/apoiadores.module').then(m => m.ApoiadoresPageModule)
          }
        ]
      },{
        path: 'video',
        children: [
          {
            path: '',
            loadChildren: () => import('../video/video.module').then(m => m.VideoPageModule)
          }
        ]
      },{
        path: 'nutricao',
        children: [
          {
            path: '',
            loadChildren: () => import('../nutricao/nutricao.module').then(m => m.NutricaoPageModule)
          }
        ]
      },{
        path: 'saude-mental',
        children: [
          {
            path: '',
            loadChildren: () => import('../saude-mental/saude-mental.module').then(m => m.SaudeMentalPageModule)
          }
        ]
      },{
        path: 'saude-idoso',
        children: [
          {
            path: '',
            loadChildren: () => import('../saude-idoso/saude-idoso.module').then(m => m.SaudeIdosoPageModule)
          }
        ]
      },{
        path: 'saude-mulher',
        children: [
          {
            path: '',
            loadChildren: () => import('../saude-mulher/saude-mulher.module').then(m => m.SaudeMulherPageModule)
          }
        ]
      },{
        path: 'saude-homem',
        children: [
          {
            path: '',
            loadChildren: () => import('../saude-homem/saude-homem.module').then(m => m.SaudeHomemPageModule)
          }
        ]
      },{
        path: 'saude-crianca',
        children: [
          {
            path: '',
            loadChildren: () => import('../saude-crianca/saude-crianca.module').then(m => m.SaudeCriancaPageModule)
          }
        ]
      },{
        path: 'saude-adolescente',
        children: [
          {
            path: '',
            loadChildren: () => import('../saude-adolescente/saude-adolescente.module').then(m => m.SaudeAdolescentePageModule)
          }
        ]
      },
      {
        path: 'comentarios-forum/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../comentarios-forum/comentarios-forum.module').then(m => m.ComentariosForumPageModule)
          }
        ]
      },{
        path: 'controlar-hipertensao',
        children: [
          {
            path: '',
            loadChildren: () => import('../controlar-hipertensao/controlar-hipertensao.module').then(m => m.ControlarHipertensaoPageModule)
          }
        ]
      },{
        path: 'coluna-saudavel',
        children: [
          {
            path: '',
            loadChildren: () => import('../coluna-saudavel/coluna-saudavel.module').then(m => m.ColunaSaudavelPageModule)
          }
        ]
      },{
        path: 'prevencao-dengue',
        children: [
          {
            path: '',
            loadChildren: () => import('../prevencao-dengue/prevencao-dengue.module').then(m => m.PrevencaoDenguePageModule)
          }
        ]
      },
      {
        path: 'disfuncoes',
        children: [
          {
            path: '',
            loadChildren: () => import('../disfuncoes/disfuncoes.module').then(m => m.DisfuncoesPageModule)
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
