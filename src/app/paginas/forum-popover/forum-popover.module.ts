import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumPopoverPageRoutingModule } from './forum-popover-routing.module';

import { ForumPopoverPage } from './forum-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumPopoverPageRoutingModule
  ],
  declarations: [ForumPopoverPage]
})
export class ForumPopoverPageModule {}
