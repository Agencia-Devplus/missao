import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumPopoverPage } from './forum-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ForumPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumPopoverPageRoutingModule {}
