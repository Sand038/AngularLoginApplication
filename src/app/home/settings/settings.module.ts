import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './settings.component';
import {RouterModule} from '@angular/router';
import {SettingsRoutes} from './settings.routes';

@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    RouterModule.forChild(SettingsRoutes),
    CommonModule
  ]
})
export class SettingsModule {
}
