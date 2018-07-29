// from angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// from project
import { LoginSmartComponent } from './blogModule/accountsModule/smartcomponents/login.smart.component';
import { ViewSmartComponent } from './blogModule/dashboardModule/smartcomponents/view.smart.component';


const routes : Routes = [
  //{path : '', redirectTo = '/accounts/login', pathMatch = ''},
  {path : '', redirectTo : '/accounts/login', pathMatch : 'full'},
  {path : 'accounts/login', component : LoginSmartComponent},
  {path : 'dashboard/view', component : ViewSmartComponent}

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
