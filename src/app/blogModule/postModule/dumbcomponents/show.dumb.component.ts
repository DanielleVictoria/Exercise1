// from angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


// from project
import { Post } from 'src/app/blogModule/_models/post';
import { User } from 'src/app/blogModule/_models/user';

@Component({
    selector: 'show-dumb',
    templateUrl: './show.dumb.component.html',
    styleUrls: ['./show.dumb.component.css']
})
export class ShowDumbComponent implements OnInit {

    @Input()
    post: Post;

    @Input()
    currentUser: User;

    @Output()
    deletePostEmitter: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    editPostEmitter: EventEmitter<Post> = new EventEmitter<Post>();

    // returns true if the post belongs to the user
    isCurrentUser: boolean;

    constructor(
    ) {
    }

    ngOnInit() {
        this.isCurrentUser = this.currentUser.username == this.post.author;
    }

    handleDeletePost() {
        this.deletePostEmitter.emit(this.post.id);
    }

    handleEditPost() {
        this.editPostEmitter.emit(this.post);
    }
}
