// from angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//from project
import { LoginSmartComponent } from './smartcomponents/login.smart.component';
import { LoginDumbComponent } from './dumbcomponents/login.dumb.component';
import { UserService } from 'src/app/blogModule/_service/user.service';

@NgModule({
  declarations: [
    LoginSmartComponent,
    LoginDumbComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports : [
    LoginSmartComponent
  ],
  providers: [
    //UserService
  ],
})

export class AccountsModule { }
