// from angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';

//from project
import { ViewSmartComponent } from './smartcomponents/view.smart.component';
import { ViewDumbComponent } from './dumbcomponents/view.dumb.component';

@NgModule({
  declarations: [
    ViewSmartComponent,
    ViewDumbComponent
  ],
  imports: [
    BrowserModule
  ],
  exports : [
    ViewSmartComponent
  ],
  providers: [],
})

export class DashboardModule { }
