// from angular
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// from project
import { User } from '../../_models/user';
import { Post } from '../../_models/post';
import { State } from '../../_models/state';

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
    posts: Post[];  // posts that this component will display

    // OUTPUTS
    @Output()
    typeEmitter: EventEmitter<string> = new EventEmitter<string>(); // myposy, mydrafts, all posts

    @Output()
    filterEmitter: EventEmitter<string[]> = new EventEmitter<string[]>(); // filters

    // NEEDED VARIABLES
    filters: string[] = [];
    willEdit: Post;
    viewUser: User;    // user to view profile

    // STATES
    state: State;
    stateSHOWING = State.SHOWING;
    stateADDING = State.ADDING;
    stateEDITING = State.EDITING;
    statePROFILE = State.PROFILE;

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.state = this.stateSHOWING;
    }

    // handle if there is a need to change the post contents. Ex. ALL, MYPOSTS, MYDRAFTS
    handlePostType(type: string) {
        // make sure that the current state of the dashboard is SHOWING
        this.changeState(State.SHOWING);
        this.typeEmitter.emit(type);
    }

    // handle if there is a need to filter the posts, returns a string[] because the Event
    //emitter passes one object only 
    handleFilter(date?: string, author?: string, category?: string, sortTitle?: string) {
        // make sure that the current state of the dashboard is SHOWING
        this.changeState(State.SHOWING);

        this.filters = [];
        date ? this.filters.push(date) : this.filters.push(null);
        author ? this.filters.push(author) : this.filters.push(null);
        category ? this.filters.push(category) : this.filters.push(null);
        sortTitle ? this.filters.push(sortTitle) : this.filters.push(null);

        this.filterEmitter.emit(this.filters);
    }

    handleEditPost(post: Post) {
        this.changeState(this.stateEDITING);
        this.willEdit = post;
    }

    changeState(state: State) {
        this.state = state;
    }
}
