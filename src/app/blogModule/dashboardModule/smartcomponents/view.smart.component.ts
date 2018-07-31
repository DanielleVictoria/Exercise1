// from angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// from project
import { UserService } from '../../_service/user.service';
import { Post } from '../../_models/post';
import { filter } from 'rxjs/internal/operators/filter';
import { PostState } from 'src/app/blogModule/_models/poststate';



@Component({
  selector: 'view-smart',
  templateUrl: './view.smart.component.html'
})
export class ViewSmartComponent implements OnInit {

  // posts to show
  tempPosts: Post[];

  constructor(
    private userservice: UserService
  ) {
  }

  ngOnInit() {
    this.changePostContent("all");
  }

  // to change the content of the posts
  changePostContent(type: string) {
    if (type == "all") {

      this.userservice.getPostby(
        '?draft=false'
      ).subscribe(posts => this.tempPosts = posts);

    } else if (type == "myposts") {

      this.userservice.getPostby(
        '?author=' + this.userservice.currentUser.username +
        '&&draft=false'
      ).subscribe(posts => this.tempPosts = posts);

    } else if (type == "mydrafts") {

      this.userservice.getPostby(
        '?author=' + this.userservice.currentUser.username +
        '&&draft=true'
      ).subscribe(posts => this.tempPosts = posts);
    }

  }

  filterPostContent(filters: string[]) {

    let newpath: string;
    newpath = '?';

    if (filters[0] != null) {
      //convert date first
      newpath = newpath.concat('date=' + filters[0] + '&&');
    }

    if (filters[1] != null) {
      newpath = newpath.concat('author=' + filters[1] + '&&');
    }

    if (filters[2] != null) {
      newpath = newpath.concat('category=' + filters[2] + '&&');
    }

    if (filters[3] != null) {
      newpath = newpath.concat('_sort=title&&_order=');

      if (filters[3] == "Ascending") {
        newpath = newpath.concat('asc');
      } else if (filters[3] == "Descending") {
        newpath = newpath.concat('desc');
      }
    }

    console.log("Filter Path" + newpath);
    this.userservice.getPostby(newpath).subscribe(posts => this.tempPosts = posts);
  }
}
