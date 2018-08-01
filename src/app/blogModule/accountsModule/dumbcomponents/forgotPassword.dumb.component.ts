// from angular
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { User } from '../../_models/user';

@Component({
  selector: 'forgotpassword-dumb',
  templateUrl: './forgotPassword.dumb.component.html'
})
export class ForgotPasswordDumbComponent implements OnInit {

  myModel = {
    username: "Username",
    email: "Email",
    mobilenum: "Mobile Number"
  }

  @Input()
  isInvalid : boolean;

  @Output()
  infoEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();

  message : string = "Invalid Input";

  constructor() {
  }

  ngOnInit() {

  }

  handleSubmit() {
    this.infoEmitter.emit([this.myModel.username, this.myModel.email, this.myModel.mobilenum]);
  }
}

