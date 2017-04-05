import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SignInService {

  constructor(private http: Http) {}

  loginUser(): void {
    console.log('Service is here!');
  }

}
