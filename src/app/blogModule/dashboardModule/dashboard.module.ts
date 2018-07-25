// from angular
import { NgModule } from '@angular/core';

//from project
import { DashboardComponent } from 'src/app/blogModule/dashboardModule/smartcomponents/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
  ],
  exports : [
    DashboardComponent
  ],
  providers: [],
})

export class DashboardModule { }
