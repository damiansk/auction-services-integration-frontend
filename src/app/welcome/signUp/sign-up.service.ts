import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../../environments/environment';

import { User } from './sign-up.interface';
import {Observable} from "rxjs";

@Injectable()
export class SignUpService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: Http ) {}

  registerUser(user: User): Observable<string> {
    return this.http
                  .post(`${environment.API_URL}/api/v1/user/register`,
                        JSON.stringify(user),
                        {headers: this.headers})
                  .map( response => response.json() );
  }

}
