// from angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';

//from project
import { ViewSmartComponent } from './smartcomponents/view.smart.component';
import { ViewDumbComponent } from './dumbcomponents/view.dumb.component';
import { PostModule } from 'src/app/blogModule/postModule/post.module';

@NgModule({
  declarations: [
    ViewSmartComponent,
    ViewDumbComponent
  ],
  imports: [
    BrowserModule,
    PostModule
  ],
  exports : [
    ViewSmartComponent,
    ViewDumbComponent
  ],
  providers: [],
})

export class DashboardModule { }
