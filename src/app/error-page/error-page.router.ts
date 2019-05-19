import {Routes} from '@angular/router';
import {ErrorPageComponent} from './error-page.component';

export const ErrorPageRoutes: Routes = [
  {path: '**', component: ErrorPageComponent},
];
