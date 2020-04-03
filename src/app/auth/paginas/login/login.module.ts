import { NgModule } from '@angular/core';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { CompartilhadoModule } from 'src/app/compartilhado/compartilhado.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CompartilhadoModule,    
    LoginPageRoutingModule,
    FormsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
