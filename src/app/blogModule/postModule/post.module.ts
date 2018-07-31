// from angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// from project
import { ShowDumbComponent } from 'src/app/blogModule/postModule/dumbcomponents/show.dumb.component';
import { ShowSmartComponent } from 'src/app/blogModule/postModule/smartcomponents/show.smart.component';
import { AddSmartComponent } from 'src/app/blogModule/postModule/smartcomponents/add.smart.component';
import { AddDumbComponent } from 'src/app/blogModule/postModule/dumbcomponents/add.dumb.component';


@NgModule({
  declarations: [
    ShowDumbComponent,
    ShowSmartComponent,
    AddSmartComponent,
    AddDumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports : [
    ShowSmartComponent,
    AddSmartComponent
  ],
  providers: [],
})

export class PostModule { }
