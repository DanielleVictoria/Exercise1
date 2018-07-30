// from angular
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { User } from '../../_models/user';
import { Post } from '../../_models/post';

@Component({
    selector: 'view-dumb',
    templateUrl: './view.dumb.component.html',
    styleUrls: ['./view.dumb.component.css']
})
export class ViewDumbComponent implements OnInit {

    @Input()
    currentUser: User

    @Input()
    posts: Post[];
    
    @Output()
    typeEmitter : EventEmitter<string> = new EventEmitter<string>();
    
    ngOnInit() {
        
    }

    // handle if there is a need to change the post contents. Ex. ALL, MYPOSTS, MYDRAFTS
    handlePostType (type : string) {
        this.typeEmitter.emit (type);
    }
    

}
