// from angular / rxjs
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//from project
import { User } from 'src/app/blogModule/_models/user';

const USER_API: string = 'http://localhost:3000/users';

@Injectable({ providedIn: 'root' })
export class UserService {

  currentUser : User;

  constructor(private httpclient: HttpClient) {
    // Check if httpclient is ok
    console.log(httpclient);
  }

  // Get all of the Users -- NO ERROR HANDLING YET
  getUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(USER_API);
  }

  // Get user by a certain key and value -- NO EROR HANDLING YET
  getUserby(key: string, value: string): Observable<User> {
    return this.httpclient.get<User>(`${USER_API}?${key}=${value}`)
    .pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json())));
   }

  private getUser(key: string, value: string) {
    
  }
  
  // Get user with this username and password
  checkUsernameAndPassword(username : string, password : string) : Observable<User> {
    return this.httpclient.get<User>(`${USER_API}?username=${username}&&password=${password}`);
  }

}
