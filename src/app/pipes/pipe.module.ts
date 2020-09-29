import { NgModule } from "@angular/core";
import { CustomDataPipe } from "./custom-data.pipe";

@NgModule({
  declarations: [CustomDataPipe],
  imports: [],
  exports: [CustomDataPipe],
})
export class PipeModule {}
