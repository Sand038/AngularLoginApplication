import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup.component';
import {RouterModule} from '@angular/router';
import {SignupRoutes} from './signup.routes';

@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent],
  imports: [
    RouterModule.forChild(SignupRoutes),
    CommonModule
  ]
})
export class SignupModule {
}
