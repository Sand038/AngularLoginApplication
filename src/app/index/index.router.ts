import {Routes} from '@angular/router';
import {IndexComponent} from './index.component';
import {LoginGuard} from '../guards/login.guard';

export const IndexRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'login',
        loadChildren: 'app/index/login/login.module#LoginModule'
      },
      {
        path: 'signup',
        loadChildren: 'app/index/signup/signup.module#SignupModule'
      },
      {
        path: 'forgot',
        loadChildren: 'app/index/forgot/forgot.module#ForgotModule'
      }
    ]
  }
];
