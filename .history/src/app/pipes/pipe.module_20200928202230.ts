import { NgModule } from "@angular/core";
import { CustomDataPipe } from "../pipes/custom-data.pipe";

@NgModule({
  declarations: [CustomDataPipe],
  imports: [],
  exports: [CustomDataPipe],
})
export class PipeModule {}
