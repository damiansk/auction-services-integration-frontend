import { Injectable } from '@angular/core';

import { CookieService } from 'ng2-cookies';

@Injectable()
export class AuthService {

  constructor(private cookieService: CookieService) {}

  isAuthorized(): boolean {
    //TODO should connect to backend and check authorization valid
    return this.cookieService.check('authorization') &&
            this.cookieService.check('email') &&
            this.cookieService.check('role');
  }

  isLogged(): boolean {
    return this.cookieService.check('authorization');
  }

  public getAuthToken(): string {
    return this.cookieService.get('authorization');
  }

  public setAuthToken(token: string): void {
    this.cookieService.set('authorization', token, null, '/');
  }

  public getEmail(): string {
    return this.cookieService.get('email');
  }

  public setEmail(email: string): void {
    this.cookieService.set('email', email, null, '/');
  }

  public getRole(): string {
    return this.cookieService.get('role');
  }

  public setRole(role: string): void {
    this.cookieService.set('role', role, null, '/');
  }

}
