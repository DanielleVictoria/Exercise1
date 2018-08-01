// from angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//from project
import { LoginSmartComponent } from './smartcomponents/login.smart.component';
import { LoginDumbComponent } from './dumbcomponents/login.dumb.component';
import { UserService } from 'src/app/blogModule/_service/user.service';
import { ProfileDumbComponent } from './dumbcomponents/profile.dumb.component';
import { ProfileSmartComponent } from './smartcomponents/profile.smart.component';

@NgModule({
  declarations: [
    LoginSmartComponent,
    LoginDumbComponent,
    ProfileDumbComponent,
    ProfileSmartComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports : [
    LoginSmartComponent,
    ProfileSmartComponent
  ],
  providers: [
    //UserService
  ],
})

export class AccountsModule { }
