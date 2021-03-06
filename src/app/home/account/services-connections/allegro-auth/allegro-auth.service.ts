import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { AuthService} from '../../../../_services/auth.service';
import { environment } from '../../../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class AllegroAuthService {

  constructor(private authService: AuthService,
              private http: Http) {}

  public getAccountExpirationTime(): Observable<Response> {
    return this.http
      .get(`${environment.API_URL}${environment.ALLEGRO_URL.getTokenExpirationDate}`,
        {headers: new Headers( {'Content-Type': 'application/json',
                                'Authorization': this.authService.getAuthToken()} )
        });
  }

  public getActivationLink(): Observable<Response> {
    return this.http
      .get(`${environment.API_URL}${environment.ALLEGRO_URL.authRedirect}`,
        {headers: new Headers( {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAuthToken()} )
        });
  }

  public connectAccount(code: string, authToken: string): Observable<Response> {
    return this.http
      .post(`${environment.API_URL}${environment.ALLEGRO_URL.authAccepted}`,
        { 'code': code, 'authToken': authToken },
        { headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getAuthToken()
          })
        });
  }

  public decodeDate(date: Date): string {
    if ( isNaN(date.getMinutes()) ) return '-';

    const day = date.getDay();
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

}


