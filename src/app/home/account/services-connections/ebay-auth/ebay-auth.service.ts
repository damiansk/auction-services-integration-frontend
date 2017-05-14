import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

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
        {headers: new Headers( {'Content-Type': 'application/json',
                                'Authorization': this.authService.getAuthToken()} )
        });
  }

}


