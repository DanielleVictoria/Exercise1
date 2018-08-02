// from angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { UserService } from '../../_service/user.service';
import { User } from '../../_models/user';
import { Post } from '../../_models/post';
import { State } from '../../_models/state';

@Component({
    selector: 'add-smart',
    templateUrl: './add.smart.component.html',
})

export class AddSmartComponent implements OnInit {

    currentUser: User;

    // triggers when adding a post is done, then tells the view to show the posts again
    @Output()
    finishEmitter: EventEmitter<any> = new EventEmitter();



    constructor(
        private userservice: UserService
    ) {
    }

    ngOnInit() {
        this.currentUser = this.userservice.currentUser;
    }

    newPost(post: Post) {
        this.userservice.addPost(post).subscribe();
        this.finishEmitter.emit();
    }
}
