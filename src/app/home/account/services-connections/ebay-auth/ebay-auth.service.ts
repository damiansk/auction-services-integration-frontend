import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import { AuthService} from '../../../../_services/auth.service';
import { environment } from '../../../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class EbayAuthService {

  constructor(private authService: AuthService,
              private http: Http) {}

  public getAccountExpirationTime(): Observable<Response> {
    return this.http
      .get(`${environment.API_URL}${environment.EBAY_URL.getTokenExpirationDate}`,
        {headers: new Headers( {'Content-Type': 'application/json',
                                'Authorization': this.authService.getAuthToken()} )
        });
  }

  public getActivationLink(): Observable<Response> {
    return this.http
      .get(`${environment.API_URL}${environment.EBAY_URL.authRedirect}`,
        {headers: new Headers( {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAuthToken()} )
        });
  }

  public connectAccount(state: string, code: string): Observable<Response> {
    const params = new URLSearchParams();
    params.set('state', state);
    params.set('code', code);

    return this.http
      .get(`${environment.API_URL}${environment.EBAY_URL.authAccepted}`,
        { headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getAuthToken()
          }),
          search: params
        });
  }

  public decodeDate(date: Date): string {
    if ( isNaN(date.getMinutes()) ) return '-';

    const day = date.getDay();
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

}


