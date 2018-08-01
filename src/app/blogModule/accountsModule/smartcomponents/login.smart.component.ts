  // from angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'; 

//from project
import { User } from '../../_models/user';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'login-smart',
  templateUrl : './login.smart.component.html'
})
export class LoginSmartComponent implements OnInit{

  constructor (
    // private route : ActivatedRoute,
    private router : Router,
    public userservice : UserService) {
  }

  ngOnInit () {

  }

  // assign a user to the currentuser property of the service
  handleCurrentUserEmitter(user : User) : void {  
    this.userservice.currentUser = user;  
    this.router.navigate(['/dashboard/view']);
  }

  handleForgotPasswordEmitter(event : any) {
    console.log ("Forgot Password");
    this.router.navigate(['/forgotpassword']);
  }
}
