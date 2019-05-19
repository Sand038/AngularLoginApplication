import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../guards/auth.guard';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: 'app/home/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'settings',
        loadChildren: 'app/home/settings/settings.module#SettingsModule'
      },
      {
        path: 'products',
        loadChildren: 'app/home/products/products.module#ProductsModule'
      }
    ]
  }
];
