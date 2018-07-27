// from angular
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

//from project
import { DashboardModule } from 'src/app/blogModule/dashboardModule/dashboard.module';
import { PostModule } from 'src/app/blogModule/postModule/post.module';
import { BlogComponent } from 'src/app/blogModule/blog.component';
import { AccountsModule } from 'src/app/blogModule/accountsModule/accounts.module';

// for bootstraps
import { ButtonsModule } from 'ngx-bootstrap';
import { BlogRoutingModule } from '../blog-routing.module';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    // from angular
    HttpClientModule,
    CommonModule,

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
    HttpClientModule
  ],
})

export class BlogModule { }
