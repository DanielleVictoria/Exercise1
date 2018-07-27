// from angular
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { UserService } from 'src/app/blogModule/_service/user.service';
import { User } from 'src/app/blogModule/_models/user';

@Component({
  selector: 'accounts-login',
  styleUrls: ['./accounts.login.component.css'],
  templateUrl: './accounts.login.component.html'
})
export class AccountsLoginComponent implements OnInit {

  // where to find the certain user
  users: User[];
  
  // for forms
  modelUser: User;
  
  // for debuggin
  testing: boolean;

  @Output()
  currentUserEmitter : EventEmitter<User> = new EventEmitter<User>();

  constructor(private userservice: UserService) {
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

    this.userservice.getUsers().subscribe(users => this.users = users);

  }

  // handle for the submit button, if correct, pass the current user to accounts.component
  handleSubmit(username: string, password: string): void {
    console.log ("Accounts Login Component : HANDLING SUBMIT : ");
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
    console.log ("Accounts Login Component : EMITTING CURRENT USER TO ACCOUNTS - USER : " + user.username );
    this.currentUserEmitter.emit (user);
  }
}

