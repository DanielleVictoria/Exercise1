  // from angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'; 

//from project
import { User } from '../../_models/user';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'forgotpassword-smart',
  templateUrl : './forgotPassword.smart.component.html'
})
export class ForgotPasswordSmartComponent implements OnInit{

  user : User;
  isInvalid : boolean = false;

  constructor (
    // private route : ActivatedRoute,
    private router : Router,
    public userservice : UserService) {
  }

  ngOnInit () {

  }

  handleForgotPassword(info : string[]) {
    let users : User[] = this.userservice.users;

    for (let user of users) {
      if (user.username == info[0] && user.email == info[1] && user.mobilenum == info[2]) {
        this.user = user;
        this.isInvalid = false;
        return;
      }
    }
    this.isInvalid = true;
  }


}
