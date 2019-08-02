import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Users, User} from './register';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
 

  export class RegisterService {
    private apiURL = 'http://localhost:4000/register';
      
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
        responseType: 'text' as 'json' 
    };

    constructor(private http: HttpClient) {}

    getUser(users:Users): Observable<Users>{
        return this.http.get<Users>(this.apiURL, users, this.httpOptions).pipe(
            tap(_ =>{ 
              //console.log(`user details....`)
            }),
            // catchError(this.handleError<Users>('deleteHero'))
          );
    };

  }