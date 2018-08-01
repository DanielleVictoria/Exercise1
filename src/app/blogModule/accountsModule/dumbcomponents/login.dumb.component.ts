// from angular
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { User } from '../../_models/user';

@Component({
  selector: 'login-dumb',
  templateUrl: './login.dumb.component.html'
})
export class LoginDumbComponent implements OnInit {

  // where to find the certain user
  @Input()
  users: User[];

  // alert message
  message: string;
  isWrong: boolean = false;

  // for forms
  modelUser: User;

  // for debuggin
  testing: boolean;

  // emitter for current user 
  @Output()
  currentUserEmitter: EventEmitter<User> = new EventEmitter<User>();

  // emitter for telling the smart component to redirect
  @Output()
  forgotPasswordEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

    this.testing = false;

    this.modelUser = {
      id: 0,
      username: "",
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      birthdate: "",
      password: "",
      mobilenum: "",
      interests: ""
    }
  }

  // handle for the submit button, if correct, pass the current user to accounts.component
  handleSubmit(username: string, password: string): void {
    for (let user of this.users) {
      if (user.username === username && user.password === password) {
        console.log("Accounts Login Component : USERNAME AND PASSWORD MATCH - USER : " + user.username);
        this.emitUser(user);
        return;
      } else if (user.username === username && user.password !== password) {
        this.alert("Wrong Password");
        return;
      }
    }
    this.alert("No username exists" );
  }

  handleForgotPassword() {
    this.forgotPasswordEmitter.emit();
  }

  alert(message: string) {
    this.message = message;
    this.isWrong = true;
  }


  // output
  emitUser(user: User): void {
    this.currentUserEmitter.emit(user);
  }
}

