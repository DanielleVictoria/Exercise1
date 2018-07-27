// from angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//from project
import { AccountsComponent } from 'src/app/blogModule/accountsModule/smartcomponents/accounts.component';
import { AccountsLoginComponent } from 'src/app/blogModule/accountsModule/dumbcomponents/accounts.login.component';

@NgModule({
  declarations: [
    AccountsComponent,
    AccountsLoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports : [
    AccountsComponent
  ],
  providers: [],
})

export class AccountsModule { }
