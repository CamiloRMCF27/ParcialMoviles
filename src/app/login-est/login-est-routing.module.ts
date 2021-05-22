import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEstPage } from './login-est.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEstPageRoutingModule {}
