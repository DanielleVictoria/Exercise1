// from angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { UserService } from '../../_service/user.service';
import { User } from 'src/app/blogModule/_models/user';
import { Post } from '../../_models/post';
import { State } from 'src/app/blogModule/_models/state';

@Component({
    selector: 'add-smart',
    templateUrl: './add.smart.component.html',
})

export class AddSmartComponent implements OnInit {

    currentUser: User;

    constructor(
        private userservice: UserService
    ) {
    }

    ngOnInit() {
        this.currentUser = this.userservice.currentUser;
    }

    newPost (post : Post) {
        this.userservice.addPost (post).subscribe();
    }
}
