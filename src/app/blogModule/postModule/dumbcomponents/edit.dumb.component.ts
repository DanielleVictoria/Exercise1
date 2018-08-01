// from angular
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// from project
import { UserService } from '../../_service/user.service';
import { User } from '../../_models/user';
import { Post } from '../../_models/post';
import { State } from '../../_models/state';

@Component({
    selector: 'edit-dumb',
    templateUrl: './edit.dumb.component.html',
    styleUrls: ['add.dumb.component.css']
})

export class EditDumbComponent implements OnInit {

    @Input()
    post: Post;

    @Output()
    editPostEmitter: EventEmitter<Post> = new EventEmitter<Post>();

    constructor(
    ) {
    }

    ngOnInit() {

    }

    handleSubmit(_category: string, _publish: string, _title: string, _body: string, _subtitle?: string) {
        let _date = this.getDateToday();

        let post: Post = {
            id: this.post.id,
            title: _title,
            subtitle: _subtitle,
            author: this.post.author,
            category: _category,
            date: _date,
            body: _body,
            draft: _publish == "DRAFT"
        }

        this.editPostEmitter.emit(post);
    }

    private getDateToday(): string {
        let date = new Date(Date.now());
        let month = date.getMonth() + 1;
        let monthString = month > 9 ? '' + month.toString() : '0' + month.toString();
        let day = date.getDate() > 9 ? '' + date.getDate().toString() : '0' + date.getDate().toString();

        return monthString + "/" + day + "/" + date.getFullYear();
    }
}
