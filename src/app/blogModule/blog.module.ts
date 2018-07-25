// from angular
import { NgModule } from '@angular/core';

//from project
import { DashboardModule } from 'src/app/blogModule/dashboardModule/dashboard.module';
import { PostModule } from 'src/app/blogModule/postModule/post.module';
import { ProfileModule } from 'src/app/blogModule/profileModule/profile.module';
import { BlogComponent } from 'src/app/blogModule/blog.component';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    DashboardModule,
    PostModule,
    ProfileModule
  ],
  exports : [
    BlogComponent
  ],
  providers: [],
})

export class BlogModule { }
