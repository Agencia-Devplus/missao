import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'inicio',
    loadChildren: './paginas/paginas.module#PaginasModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'addpergunta',
    loadChildren: () => import('./paginas/addpergunta/addpergunta.module').then(m => m.AddperguntaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'apoiadores',
    loadChildren: () => import('./paginas/apoiadores/apoiadores.module').then(m => m.ApoiadoresPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'video',
    loadChildren: () => import('./paginas/video/video.module').then(m => m.VideoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'nutricao',
    loadChildren: () => import('./paginas/nutricao/nutricao.module').then(m => m.NutricaoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'saude-mental',
    loadChildren: () => import('./paginas/saude-mental/saude-mental.module').then(m => m.SaudeMentalPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'saude-idoso',
    loadChildren: () => import('./paginas/saude-idoso/saude-idoso.module').then(m => m.SaudeIdosoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'saude-mulher',
    loadChildren: () => import('./paginas/saude-mulher/saude-mulher.module').then(m => m.SaudeMulherPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'saude-homem',
    loadChildren: () => import('./paginas/saude-homem/saude-homem.module').then(m => m.SaudeHomemPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'saude-crianca',
    loadChildren: () => import('./paginas/saude-crianca/saude-crianca.module').then(m => m.SaudeCriancaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'saude-adolescente',
    loadChildren: () => import('./paginas/saude-adolescente/saude-adolescente.module').then(m => m.SaudeAdolescentePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'projeto',
    loadChildren: () => import('./paginas/projeto/projeto.module').then(m => m.ProjetoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'controlar-hipertensao',
    loadChildren: () => import('./paginas/controlar-hipertensao/controlar-hipertensao.module').then(m => m.ControlarHipertensaoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'coluna-saudavel',
    loadChildren: () => import('./paginas/coluna-saudavel/coluna-saudavel.module').then(m => m.ColunaSaudavelPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'prevencao-dengue',
    loadChildren: () => import('./paginas/prevencao-dengue/prevencao-dengue.module').then(m => m.PrevencaoDenguePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'disfuncoes',
    loadChildren: () => import('./paginas/disfuncoes/disfuncoes.module').then(m => m.DisfuncoesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'comentarios-forum/:id',
    loadChildren: () => import('./paginas/comentarios-forum/comentarios-forum.module').then(m => m.ComentariosForumPageModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
