// from angular
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { UserService } from '../../_service/user.service';
import { Post } from 'src/app/blogModule/_models/post';

@Component({
    selector: 'show-smart',
    templateUrl: './show.smart.component.html'
})
export class ShowSmartComponent implements OnInit {
    
    @Input()
    post : Post;

    // returns true if the post belongs to the current user
    isCurrentUser : boolean;

    constructor(
        private userservice: UserService
    ) {
    }

    ngOnInit() {
        this.isCurrentUser = this.post.author == this.userservice.currentUser.username;
    }
}
