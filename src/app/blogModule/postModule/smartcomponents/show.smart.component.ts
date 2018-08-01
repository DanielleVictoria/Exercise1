// from angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// from project
import { UserService } from '../../_service/user.service';
import { Post } from 'src/app/blogModule/_models/post';
import { User } from 'src/app/blogModule/_models/user';

@Component({
    selector: 'show-smart',
    templateUrl: './show.smart.component.html'
})
export class ShowSmartComponent implements OnInit {

    @Input()
    posts: Post[];

    @Output()
    postToEditEmitter: EventEmitter<Post> = new EventEmitter<Post>();

    currentUser: User;

    constructor(
        private userservice: UserService
    ) {
    }

    ngOnInit() {
        this.currentUser = this.userservice.currentUser;
    }

    // deletes the post
    deletePost(id: number) {
        this.userservice.deletePost(id).subscribe();
    }

    // tell View that the editing process will happen and must let the user view the edit form 
    // + pass the post that we will edit
    tellViewEdit(post: Post) {
        this.postToEditEmitter.emit (post);
    }
}
