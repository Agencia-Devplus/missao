import { NgModule } from '@angular/core';
import { PainelPageRoutingModule } from './painel-routing.module';
import { PainelPage } from './painel.page';
import { CompartilhadoModule } from 'src/app/compartilhado/compartilhado.module';

@NgModule({
  imports: [
    CompartilhadoModule,
    PainelPageRoutingModule
  ],
  declarations: [PainelPage]
})
export class PainelPageModule {}
