import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../../environments/environment';

import { Login } from './sing-in.interface';

@Injectable()
export class SignInService {

  private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8;'})

  constructor(private http: Http) {}

  loginUser(login: Login): void {
    console.log(JSON.stringify(login));

    this.http
      .post( `${environment.API_URL}/api/v1/user/login`, JSON.stringify(login), {headers: this.headers})
      .subscribe(
        data => console.log(data),
        err => console.error(err),
        () => console.log('Done')
      )
  }

}
