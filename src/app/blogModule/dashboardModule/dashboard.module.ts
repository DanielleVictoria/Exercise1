// from angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//from project
import { ViewSmartComponent } from './smartcomponents/view.smart.component';
import { ViewDumbComponent } from './dumbcomponents/view.dumb.component';
import { PostModule } from 'src/app/blogModule/postModule/post.module';

// from ngx-bootsrap
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ViewSmartComponent,
    ViewDumbComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  exports : [
    ViewSmartComponent,
    ViewDumbComponent
  ],
  providers: [],
})

export class DashboardModule { }
