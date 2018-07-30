// from angular
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


// from project
import { Post } from 'src/app/blogModule/_models/post';

@Component({
    selector: 'show-dumb',
    templateUrl: './show.dumb.component.html',
    styleUrls : ['./show.dumb.component.css']
})
export class ShowDumbComponent implements OnInit {

    @Input()
    post : Post;

    @Input()
    isCurrentUser : boolean;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
