// from angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// from project
import { ShowDumbComponent } from 'src/app/blogModule/postModule/dumbcomponents/show.dumb.component';
import { ShowSmartComponent } from 'src/app/blogModule/postModule/smartcomponents/show.smart.component';
import { AddSmartComponent } from 'src/app/blogModule/postModule/smartcomponents/add.smart.component';
import { AddDumbComponent } from 'src/app/blogModule/postModule/dumbcomponents/add.dumb.component';

// for bootsrap
import { AlertModule } from 'ngx-bootstrap';
import { EditDumbComponent } from 'src/app/blogModule/postModule/dumbcomponents/edit.dumb.component';
import { EditSmartComponent } from 'src/app/blogModule/postModule/smartcomponents/edit.smart.component';



@NgModule({
  declarations: [
    ShowDumbComponent,
    ShowSmartComponent,
    AddSmartComponent,
    AddDumbComponent,
    EditDumbComponent,
    EditSmartComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),

  ],
  exports : [
    ShowSmartComponent,
    AddSmartComponent,
    EditSmartComponent
  ],
  providers: [],
})

export class PostModule { }
