import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {}

  isAuthorized(): boolean {
    return true;
  }

  isLogged(): boolean {
    return true;
  }

}
