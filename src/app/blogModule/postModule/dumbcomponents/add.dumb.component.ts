// from angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { User } from '../../_models/user';
import { Post } from '../../_models/post';
import { DateFormatter } from 'ngx-bootstrap';

@Component({
    selector: 'add-dumb',
    templateUrl: './add.dumb.component.html',
    styleUrls: ['./add.dumb.component.css']
})

export class AddDumbComponent implements OnInit {

    // from smart component
    @Input()
    currentUser: User;

    @Output()
    newPostEmitter : EventEmitter<Post> = new EventEmitter<Post>();

    // for forms
    modelPost: Post;

    constructor(
    ) {
    }

    ngOnInit() {
        this.modelPost = {
            id : 0,
            title : "",
            subtitle : "",
            author : "",
            category : "",
            date : "",  
            body : "",  
            draft : true
        }        
    }

    handleSubmit(_category : string, _publish : string , _title : string, _body : string, _subtitle? : string) {
        console.log (_category + _publish + _title + _body + _subtitle);
        let _date = this.getDateToday();
        
        let post : Post = {
            id : 0,
            title : _title,
            subtitle : _subtitle,
            author : this.currentUser.username,
            category : _category,
            date : _date,
            body : _body,
            draft : _publish == "DRAFT"
        }

        this.emitNewPost (post);

    }

    emitNewPost (post : Post) {
        this.newPostEmitter.emit (post);
    }

    private getDateToday () : string {
        
        let date = new Date (Date.now());
        let month = date.getMonth() + 1;
        let monthString = month > 9 ? '' + month.toString() : '0' + month.toString();
        let day = date.getDate() > 9 ? '' + date.getDate().toString() : '0' + date.getDate().toString();
        
        return monthString + "/" + day + "/" + date.getFullYear();
    }
}
