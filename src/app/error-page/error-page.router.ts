import {Route} from '@angular/router';
import {ErrorPageComponent} from './error-page.component';

export const ErrorPageRoutes: Route[] = [
  {path: '**', component: ErrorPageComponent},
];
