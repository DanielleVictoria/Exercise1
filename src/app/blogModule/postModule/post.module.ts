// from angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// from project
import { ShowDumbComponent } from 'src/app/blogModule/postModule/dumbcomponents/show.dumb.component';
import { ShowSmartComponent } from 'src/app/blogModule/postModule/smartcomponents/show.smart.component';

@NgModule({
  declarations: [
    ShowDumbComponent,
    ShowSmartComponent
  ],
  imports: [
    BrowserModule
  ],
  exports : [
    ShowSmartComponent
  ],
  providers: [],
})

export class PostModule { }
