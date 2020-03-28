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
                path: 'perfil',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./perfil/perfil.module').then(m => m.PerfilPageModule)
                    }
                ]
            }
        ]
    },
  {
    path: 'addpergunta',
    loadChildren: () => import('./addpergunta/addpergunta.module').then( m => m.AddperguntaPageModule)
  },
  {
    path: 'apoiadores',
    loadChildren: () => import('./apoiadores/apoiadores.module').then( m => m.ApoiadoresPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'nutricao',
    loadChildren: () => import('./nutricao/nutricao.module').then( m => m.NutricaoPageModule)
  },
  {
    path: 'saude-mental',
    loadChildren: () => import('./saude-mental/saude-mental.module').then( m => m.SaudeMentalPageModule)
  },
  {
    path: 'saude-idoso',
    loadChildren: () => import('./saude-idoso/saude-idoso.module').then( m => m.SaudeIdosoPageModule)
  },
  {
    path: 'saude-mulher',
    loadChildren: () => import('./saude-mulher/saude-mulher.module').then( m => m.SaudeMulherPageModule)
  },
  {
    path: 'saude-homem',
    loadChildren: () => import('./saude-homem/saude-homem.module').then( m => m.SaudeHomemPageModule)
  },
  {
    path: 'saude-crianca',
    loadChildren: () => import('./saude-crianca/saude-crianca.module').then( m => m.SaudeCriancaPageModule)
  },
  {
    path: 'saude-adolescente',
    loadChildren: () => import('./saude-adolescente/saude-adolescente.module').then( m => m.SaudeAdolescentePageModule)
  },
  {
    path: 'projeto',
    loadChildren: () => import('./projeto/projeto.module').then( m => m.ProjetoPageModule)
  },
  {
    path: 'forum-popover',
    loadChildren: () => import('./forum-popover/forum-popover.module').then( m => m.ForumPopoverPageModule)
  },
  {
    path: 'comentarios-forum/:id',
    loadChildren: () => import('./comentarios-forum/comentarios-forum.module').then( m => m.ComentariosForumPageModule)
  },  {
    path: 'controlar-hipertensao',
    loadChildren: () => import('./controlar-hipertensao/controlar-hipertensao.module').then( m => m.ControlarHipertensaoPageModule)
  },
  {
    path: 'coluna-saudavel',
    loadChildren: () => import('./coluna-saudavel/coluna-saudavel.module').then( m => m.ColunaSaudavelPageModule)
  },
  {
    path: 'prevencao-dengue',
    loadChildren: () => import('./prevencao-dengue/prevencao-dengue.module').then( m => m.PrevencaoDenguePageModule)
  },
  {
    path: 'disfuncoes',
    loadChildren: () => import('./disfuncoes/disfuncoes.module').then( m => m.DisfuncoesPageModule)
  }



];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginasRoutingModule { }