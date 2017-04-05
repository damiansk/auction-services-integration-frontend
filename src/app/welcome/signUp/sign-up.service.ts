import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import { User } from './sign-up.interface';
import { Observable } from 'rxjs';

@Injectable()
export class SignUpService {

  private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8;'});

  constructor( private http: Http ) {}

  registerUser(user: User): Observable<Response> {
    user.username = user.username || '';

    console.log(JSON.stringify(user));

    return this.http
      .post( `${environment.API_URL}/api/v1/user/register`, JSON.stringify(user), {headers: this.headers} );
  }

}
