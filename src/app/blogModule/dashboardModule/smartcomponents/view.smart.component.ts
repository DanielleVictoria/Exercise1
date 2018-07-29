// from angular
import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';

// from project
import { User } from '../../_models/user';
import { UserService } from '../../_service/user.service';
import { Post } from '../../_models/post';

@Component({
  selector: 'view-smart',
  templateUrl : './view.smart.component.html'
})
export class ViewSmartComponent implements OnInit {

  currentUser : User
  allPosts : Post[];

  constructor (
    private userservice : UserService
  ) {
  }

  ngOnInit () {
    this.currentUser = this.userservice.currentUser;
    this.userservice.getPosts ().subscribe (posts => this.allPosts = posts);
  }
}
