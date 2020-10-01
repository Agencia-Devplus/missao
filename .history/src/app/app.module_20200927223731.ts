import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { FirestoreSettingsToken } from "@angular/fire/firestore";
import { environment } from "./../environments/environment";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [CoreModule, AppRoutingModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
