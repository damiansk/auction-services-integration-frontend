import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { CookieService } from 'ng2-cookies';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private cookieService: CookieService,
              private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( this.authService.isAuthorized() ) {
      return true;
    } else {
      this.cookieService.set('desired-url', state.url, this.minutesFromNow(15), '/');
      this.router.navigate(['welcome/login']);
      return false;
    }
  }

  private minutesFromNow(minutes: number): Date {
    return new Date(Date.now() + minutes*60000);
  }

}
