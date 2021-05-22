import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEstPageRoutingModule } from './login-est-routing.module';

import { LoginEstPage } from './login-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEstPageRoutingModule
  ],
  declarations: [LoginEstPage]
})
export class LoginEstPageModule {}
