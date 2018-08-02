// from angular
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


//from project
import { User } from '../../_models/user';

@Component({
  selector: 'profile-dumb',
  templateUrl: './profile.dumb.component.html',
  styleUrls: ['../../postModule/dumbcomponents/add.dumb.component.css']
})
export class ProfileDumbComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  editUserEmitter: EventEmitter<User> = new EventEmitter<User>();

  isEditing: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
    console.log (this.isEditing);
  }

  // dont forget to add interests
  handleSubmit(_username: string, _firstname: string, _middlename: string, _lastname: string, _email: string, _date : string)  {
    let newuser : User = {
      id : this.user.id,
      username : _username,
      firstname : _firstname,
      middlename : _middlename, 
      lastname : _lastname,
      email : _email,
      birthdate : _date,
      password : this.user.password,
      mobilenum : this.user.mobilenum

      // ADD interests HERE
    }

    console.log (newuser);
    this.editUserEmitter.emit (newuser);
  }

}
