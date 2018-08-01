// from angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//from project
import { ViewSmartComponent } from './smartcomponents/view.smart.component';
import { ViewDumbComponent } from './dumbcomponents/view.dumb.component';
import { PostModule } from 'src/app/blogModule/postModule/post.module';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { AccountsModule } from 'src/app/blogModule/accountsModule/accounts.module';

@NgModule({
  declarations: [
    ViewSmartComponent,
    ViewDumbComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    AccountsModule,
    FormsModule,
    BsDatepickerModule.forRoot (),
  ],
  exports : [
    ViewSmartComponent,
    ViewDumbComponent
  ],
  providers: [],
})

export class DashboardModule { }
