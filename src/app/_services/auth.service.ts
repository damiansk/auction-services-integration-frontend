import { Injectable } from '@angular/core';

import { CookieService } from 'ng2-cookies';

@Injectable()
export class AuthService {

  constructor(private cookieService: CookieService) {}

  isAuthorized(): boolean {
    //TODO should connect to backend and check authorization valid
    return !!this.cookieService.get('authorization') &&
            !!this.cookieService.get('email') &&
            !!this.cookieService.get('role');
  }

  isLogged(): boolean {
    return !!this.cookieService.get('authorization');
  }

  public getAuthToken(): string {
    return this.cookieService.get('authorization');
  }

  public getEmail(): string {
    return this.cookieService.get('email');
  }

  public getRole(): string {
    return this.cookieService.get('role');
  }

}
