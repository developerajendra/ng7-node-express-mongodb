import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {User} from './register';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
 

  export class LoginService {
    private apiURL = 'http://localhost:4000/login';
      
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
        responseType: 'text' as 'json' 
    };

    constructor(private http: HttpClient) {}

    loginUsers(user:User): Observable<User>{
        return this.http.post<User>(this.apiURL, user, this.httpOptions).pipe(
            tap(_ =>{ 
              //console.log(`user details....`)
            }),
            // catchError(this.handleError<Users>('deleteHero'))
          );
    };

  }