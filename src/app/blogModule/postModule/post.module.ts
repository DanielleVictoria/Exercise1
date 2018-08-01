// from angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// from project
import { ShowDumbComponent } from './dumbcomponents/show.dumb.component';
import { ShowSmartComponent } from './smartcomponents/show.smart.component';
import { AddSmartComponent } from './smartcomponents/add.smart.component';
import { AddDumbComponent } from './dumbcomponents/add.dumb.component';

// for bootsrap
import { AlertModule } from 'ngx-bootstrap';
import { EditDumbComponent } from './dumbcomponents/edit.dumb.component';
import { EditSmartComponent } from './smartcomponents/edit.smart.component';



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
