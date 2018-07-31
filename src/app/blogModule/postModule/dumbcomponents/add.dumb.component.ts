// from angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { User } from 'src/app/blogModule/_models/user';
import { Post } from 'src/app/blogModule/_models/post';
import { DateFormatter } from '../../../../../node_modules/ngx-bootstrap';

@Component({
    selector: 'add-dumb',
    templateUrl: './add.dumb.component.html',
    styleUrls: ['./add.dumb.component.css']
})

export class AddDumbComponent implements OnInit {

    // from smart component
    @Input()
    currentUser: User;

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

        console.log (post);

    }

    private getDateToday () : string {
        let date = new Date (Date.now());
        let month = date.getMonth() + 1;

        return month.toString() + "/" + date.getDate().toString() + "/" + date.getFullYear()
    }
}
