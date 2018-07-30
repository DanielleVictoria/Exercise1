// from angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// from project
import { UserService } from '../../_service/user.service';
import { Post } from '../../_models/post';


@Component({
  selector: 'view-smart',
  templateUrl: './view.smart.component.html'
})
export class ViewSmartComponent implements OnInit {

  isUser: boolean;
  type: string;

  posts: Post[];
  tempPosts: Post[];

  constructor(
    private route: ActivatedRoute,
    private userservice: UserService
  ) {
  }

  ngOnInit() {
    this.posts = this.userservice.posts;
    this.changePostContent("all");
  }

  // to change the content of the posts
  changePostContent(type: string) {
    console.log (type);
    if (type == "all") {
      this.tempPosts = this.posts.filter(
        post => post.draft == false);
    }
    else if (type == "myposts") {
      this.tempPosts = this.posts.filter(
        post => post.author == this.userservice.currentUser.username &&
          post.draft == false);
    } else if (type == "mydrafts") {
      this.tempPosts = this.posts.filter(
        post => post.author == this.userservice.currentUser.username &&
          post.draft == true);
    }
  }

  filterPostContent (date? : number, author? : string, category? : string) {
    this.tempPosts = this.tempPosts.filter (
      post => post.author == author
    );
  }

}
