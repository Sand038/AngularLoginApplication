import {Routes} from '@angular/router';
import {IndexRoutes} from './index/index.router';
import {ErrorPageRoutes} from './error-page/error-page.router';
import {HomeRoutes} from './home/home.router';

export const routes: Routes = [...HomeRoutes, ...IndexRoutes, ...ErrorPageRoutes];
