import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ForgotComponent} from './forgot/forgot.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class IndexModule {
}
