import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import { Login } from './sing-in.interface';
import { Observable } from 'rxjs';

@Injectable()
export class SignInService {

  private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8;'})

  constructor(private http: Http) {}

  loginUser(login: Login): Observable<Response> {
    return this.http
                .post(
                  `${environment.API_URL}/api/v1/user/login`,
                  JSON.stringify(login),
                  {headers: this.headers}
                );
  }

}
