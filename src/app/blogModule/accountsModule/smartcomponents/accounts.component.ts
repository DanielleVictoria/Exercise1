// from angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule} from '@angular/common';

//from project
import { UserService } from 'src/app/blogModule/_service/user.service';
import { User } from 'src/app/blogModule/_models/user';

@Component({
  selector: 'accounts',
  templateUrl : './accounts.component.html'
})
export class AccountsComponent{
  
  @Output() //important data! must let blog.component.ts know who the current user is 
  currentUserEmitter : EventEmitter <User> = new EventEmitter <User> ();

  constructor () {
  }

  handleCurrentUser(user : User) : void {  
    console.log ("Accounts Component : HANDLING CURRENT USER - USER : " + user.username);
    this.emitCurrentUser(user);
  }

  emitCurrentUser(user : User) : void {
    console.log ("Accounts Component : EMITING CURRENT USER TO BLOG - USER : " + user.username);
    this.currentUserEmitter.emit (user);
  }
}
