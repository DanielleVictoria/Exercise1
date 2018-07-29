// from angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'; 

//from project
import { UserService } from '../../_service/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'login-smart',
  templateUrl : './login.smart.component.html'
})
export class LoginSmartComponent implements OnInit{
  
  users : User[];

  constructor (
    // private route : ActivatedRoute,
    private router : Router,
    private userservice : UserService) {
  }

  ngOnInit () {
    // initialize the list of users to pass to the dumb component
    this.userservice.getUsers ().subscribe (users => this.users = users);
  }

  // assign a user to the currentuser property of the service
  handleCurrentUserEmitter(user : User) : void {  
    this.userservice.currentUser = user;  
    this.router.navigate(['/dashboard/view']);
  }
}
