// from angular
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { UserService } from '../../_service/user.service';
import { User } from 'src/app/blogModule/_models/user';
import { Post } from '../../_models/post';
import { State } from 'src/app/blogModule/_models/state';

@Component({
    selector: 'edit-smart',
    templateUrl: './edit.smart.component.html',
})

export class EditSmartComponent implements OnInit {

    currentUser: User;

    @Input()
    post : Post;

    constructor(
        private userservice: UserService
    ) {
    }

    ngOnInit() {
        this.currentUser = this.userservice.currentUser;
    }

    editPost(post : Post) {
        this.userservice.updatePost(post).subscribe();
    }


}
