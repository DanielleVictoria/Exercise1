// from angular
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { UserService } from '../../_service/user.service';
import { User } from '../../_models/user';
import { Post } from '../../_models/post';
import { State } from '../../_models/state';

@Component({
    selector: 'edit-smart',
    templateUrl: './edit.smart.component.html',
})

export class EditSmartComponent implements OnInit {

    currentUser: User;

    @Input()
    post : Post;

    // triggers when adding a post is done, then tells the view to show the posts again
    @Output()
    finishEmitter : EventEmitter<any> = new EventEmitter();

    constructor(
        private userservice: UserService
    ) {
    }

    ngOnInit() {
        this.currentUser = this.userservice.currentUser;
    }

    editPost(post : Post) {
        this.userservice.updatePost(post).subscribe();
        this.finishEmitter.emit();
    }


}
