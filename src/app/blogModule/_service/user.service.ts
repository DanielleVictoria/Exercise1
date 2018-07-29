// from angular / rxjs
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//from project
import { User } from '../_models/user';
import { Post } from '../_models/post';

const USER_API : string = 'http://localhost:3000/users';
const POST_API : string = 'http://localhost:3000/posts';

@Injectable({ providedIn: 'root' })
export class UserService {

  currentUser : User;

  constructor(private httpclient: HttpClient) {
    // Check if httpclient is ok
    console.log("HTTP CLIENT : " + httpclient);
  }

  //---------------------------USERS-------------------------------------//

  // Get all of the Users
  getUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(USER_API).pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json)));
  }

  // Get user by a certain key and value
  private getUserby(key: string, value: string): Observable<User> {
    return this.httpclient.get<User>(`${USER_API}?${key}=${value}`)
    .pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json)));
   }

  //---------------------------POSTS-------------------------------------//
  
  // Get all of the Posts
  getPosts(): Observable<Post[]> {
    return this.httpclient.get<Post[]>(POST_API).pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json)));
  }

  // Get user by a certain key and value
  private getPostby(author : string): Observable<Post> {
    return this.httpclient.get<Post>(`${POST_API}?author=${author}`)
    .pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json)));
   }
}
