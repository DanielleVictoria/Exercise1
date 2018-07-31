// from angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { User } from 'src/app/blogModule/_models/user';
import { Post } from 'src/app/blogModule/_models/post';

@Component({
    selector: 'add-dumb',
    templateUrl: './add.dumb.component.html',
    styleUrls: ['./add.dumb.component.css']
})

export class AddDumbComponent implements OnInit {

    @Input()
    currentUser: User;

    modelPost: Post;

    constructor(
    ) {
    }

    ngOnInit() {
        this.modelPost = {
            title : "",
            subtitle : "",
            author : "",
            category : "",
            date : 0,  
            body : "",  
            draft : true
        }
    }
}
