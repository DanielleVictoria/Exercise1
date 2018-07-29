// from angular
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { User } from '../../_models/user';
 
@Component({
  selector: 'login-dumb',
  styleUrls: ['./login.dumb.component.css'],
  templateUrl: './login.dumb.component.html'
})
export class LoginDumbComponent implements OnInit {

  // where to find the certain user
  @Input()
  users: User[];
  
  // for forms
  modelUser: User;
  
  // for debuggin
  testing: boolean;

  // emitter for current user 
  @Output()
  currentUserEmitter : EventEmitter<User> = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit() {

    this.testing = false;

    this.modelUser = {
      username: "",
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      birthdate: 0,
      password: "",
      mobilenum: "",
      interests: ""
    }
  }

  // handle for the submit button, if correct, pass the current user to accounts.component
  handleSubmit(username: string, password: string): void {
    for (let user of this.users) {
      if (user.username === username && user.password === password) {
        console.log ("Accounts Login Component : USERNAME AND PASSWORD MATCH - USER : " + user.username);
        this.emitUser(user);
        return;
      } else if (user.username === username && user.password !== password) {
        console.log ("Wrong Password");
      }
    }
    console.log ("Username Does Not Exist");
  }   

  handleForgotPassword() {
    
  }

  
  // output
  emitUser (user : User) : void {
    this.currentUserEmitter.emit (user);
  }
}

