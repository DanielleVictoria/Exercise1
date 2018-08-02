  // from angular
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'; 

//from project
import { User } from '../../_models/user';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'profile-smart',
  templateUrl : './profile.smart.component.html'
})
export class ProfileSmartComponent implements OnInit{

  user : User;

  constructor (
    public userservice : UserService) {
  }

  ngOnInit () {
    this.user = this.userservice.currentUser;
  }

  editUser(user : User) {
    this.userservice.updateUser (user).subscribe();
    this.userservice.currentUser = user;
  }

}
