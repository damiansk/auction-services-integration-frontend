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
    return this.http
      .post( `${environment.API_URL}${environment.AUTH_URL.register}`,
        JSON.stringify(user),
        {headers: this.headers} );
  }

}
