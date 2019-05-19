import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './index.component';

@NgModule({
  declarations: [IndexComponent],
  exports: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class IndexModule {
}
