import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {LoginRoutes} from './login.routes';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    CommonModule
  ]
})
export class LoginModule {
}
