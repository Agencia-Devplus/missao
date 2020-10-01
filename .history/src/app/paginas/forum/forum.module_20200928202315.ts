import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ForumPageRoutingModule } from "./forum-routing.module";

import { ForumPage } from "./forum.page";

import { PipeModule } from "../../pipes/pipe.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumPageRoutingModule,
    PipeModule,
  ],
  declarations: [ForumPage],
})
export class ForumPageModule {}
