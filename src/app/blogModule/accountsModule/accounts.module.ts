// from angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//from project
import { LoginSmartComponent } from './smartcomponents/login.smart.component';
import { LoginDumbComponent } from './dumbcomponents/login.dumb.component';
import { UserService } from '../_service/user.service';
import { ProfileDumbComponent } from './dumbcomponents/profile.dumb.component';
import { ProfileSmartComponent } from './smartcomponents/profile.smart.component';
import { ForgotPasswordDumbComponent } from './dumbcomponents/forgotPassword.dumb.component';
import { ForgotPasswordSmartComponent } from './smartcomponents/forgotPassword.smart.component';
import { BlogRoutingModule } from '../../blog-routing.module';

@NgModule({
  declarations: [
    LoginSmartComponent,
    LoginDumbComponent,
    ProfileDumbComponent,
    ProfileSmartComponent,
    ForgotPasswordDumbComponent,
    ForgotPasswordSmartComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BlogRoutingModule
  ],
  exports : [
    LoginSmartComponent,
    ProfileSmartComponent,
    ForgotPasswordSmartComponent
  ],
  providers: [
    //UserService
  ],
})

export class AccountsModule { }
