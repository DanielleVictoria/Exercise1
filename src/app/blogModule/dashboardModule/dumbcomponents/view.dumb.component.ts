// from angular
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { User } from '../../_models/user';
import { Post } from '../../_models/post';
import { PostState } from 'src/app/blogModule/_models/poststate';

@Component({
    selector: 'view-dumb',
    templateUrl: './view.dumb.component.html',
    styleUrls: ['./view.dumb.component.css']
})
export class ViewDumbComponent implements OnInit {

    // INPUTS
    @Input()
    currentUser: User

    @Input()
    posts: Post[];

    // OUTPUTS
    @Output()
    typeEmitter: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    filterEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();

    @Output()
    stateEmitter: EventEmitter<PostState> = new EventEmitter<PostState>();

    // NEEDED VARIABLES
    filters: string[] = [];

    // STATES
    state: PostState;
    stateSHOWING = PostState.SHOWING;
    stateADDING = PostState.ADDING;

    ngOnInit() {
        this.state = this.stateSHOWING;
    }

    // handle if there is a need to change the post contents. Ex. ALL, MYPOSTS, MYDRAFTS
    handlePostType(type: string) {
        this.changeState (PostState.SHOWING);
        this.typeEmitter.emit(type);
    }

    // handle if there is a need to filter the posts, returns a string[] because the Event
    //emitter passes one object only 
    handleFilter(date?: string, author?: string, category?: string, sortTitle?: string) {
        this.changeState (PostState.SHOWING);
        this.filters = [];

        date ? this.filters.push(date) : this.filters.push(null);
        author ? this.filters.push(author) : this.filters.push(null);
        category ? this.filters.push(category) : this.filters.push(null);
        sortTitle ? this.filters.push(sortTitle) : this.filters.push(null);

        this.filterEmitter.emit(this.filters);
    }

    changeState (state : PostState) {
        this.state = state;
    }


}
