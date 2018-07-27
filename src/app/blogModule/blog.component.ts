// from angular
import { Component } from '@angular/core';

//from project
import { UserService } from 'src/app/blogModule/_service/user.service';
import { User } from 'src/app/blogModule/_models/user';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent {

  currentUser : User;

  constructor() {
  }

  handleCurrentUser(user : User) : void {  
    this.currentUser = user;
    console.log ("Blog Component : USER EMITTED TO BLOG - USER : " + user.username);
  }

}
