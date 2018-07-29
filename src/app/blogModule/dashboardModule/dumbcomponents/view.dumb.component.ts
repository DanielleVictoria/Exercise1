// from angular
import { Component, Input, Output, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';

// from project
import { User } from '../../_models/user';
import { Post } from '../../_models/post';

@Component({
  selector: 'view-dumb',
  templateUrl : './view.dumb.component.html'
})
export class ViewDumbComponent implements OnInit {
    
    @Input ()
    currentUser : User

    @Input ()
    allPosts : Post[];

    ngOnInit () {
        console.log (this.currentUser);
        console.log (this.allPosts);
    }

}
