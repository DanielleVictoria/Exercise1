// from angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//from project
import { AppComponent } from './app.component';
import { BlogModule } from 'src/app/blogModule/blog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
