// from angular
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

//from project
import { DashboardModule } from './dashboardModule/dashboard.module';
import { PostModule } from './postModule/post.module';
import { BlogComponent } from './blog.component';
import { AccountsModule } from './accountsModule/accounts.module';

// for bootstraps
import { ButtonsModule } from 'ngx-bootstrap';
import { BlogRoutingModule } from '../blog-routing.module';
import { UserService } from './_service/user.service';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    // from angular
    HttpClientModule,
    CommonModule,
    BrowserModule,
    
    // from project
    DashboardModule,
    PostModule,
    AccountsModule,

    // for bootstrap
    ButtonsModule.forRoot(),

    // for routing
    BlogRoutingModule
  ],
  exports : [
    BlogComponent
  ],
  providers:  [   
    HttpClientModule,
    UserService
  ],
})

export class BlogModule { }
