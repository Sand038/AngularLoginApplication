import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {HomeComponent} from './home/home.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.router';
import {IndexModule} from './index/index.module';
import {HomeModule} from './home/home.module';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
