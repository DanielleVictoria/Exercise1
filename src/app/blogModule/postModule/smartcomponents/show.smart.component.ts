// from angular
import { Component, OnInit, Input } from '@angular/core';

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
    posts : Post[];

    currentUser : User;

    constructor(
        private userservice: UserService
    ) {
    }

    ngOnInit() {
        this.currentUser = this.userservice.currentUser;
    }
}
