// from angular / rxjs
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//from project
import { User } from '../_models/user';
import { Post } from '../_models/post';
import { BlogModule } from 'src/app/blogModule/blog.module';

// paths
const USER_API: string = 'http://localhost:3000/users';
const POST_API: string = 'http://localhost:3000/posts';

@Injectable()
export class UserService {

  // shared datas
  currentUser: User;
  users: User[];
  posts: Post[];

  //local
  private newPath : string = '';

  constructor(private httpclient: HttpClient) {
    // Check if httpclient is ok
    console.log("HTTP CLIENT : " + httpclient);

    this.getUsers().subscribe(users => this.users = users);
    this.getPosts().subscribe(posts => this.posts = posts);

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
  getPostby(path: string): Observable<Post[]> {
    this.newPath = POST_API + path;
    return this.httpclient.get<Post[]>(this.newPath)
      .pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json)));
  }
}
