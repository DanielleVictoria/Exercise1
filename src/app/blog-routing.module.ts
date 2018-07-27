// from angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// from project
import { AccountsLoginComponent } from 'src/app/blogModule/accountsModule/dumbcomponents/accounts.login.component';

const routes : Routes = [
  //{path : '', redirectTo = '/accounts/login', pathMatch = ''},
  {path : 'accounts/login', component : AccountsLoginComponent}
]

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule,
  ],
  declarations: []
})
export class BlogRoutingModule { }
