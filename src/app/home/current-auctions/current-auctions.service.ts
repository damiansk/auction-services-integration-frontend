import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

import {environment} from '../../../environments/environment';
import {AuthService} from '../../_services/auth.service';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class CurrentAuctionsService {

  constructor(private http: Http,
              private authService: AuthService) {}

  getAllegroActiveAuctions(pageSize: string = '20', pageNumber: string = '0'): Observable<Response> {
    const params = new URLSearchParams();
    params.append('pageSize', pageSize);
    params.append('pageNumber', pageNumber);

    const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8;',
                                  'Authorization': this.authService.getAuthToken()});

    return this.http
      .get(`${environment.API_URL}${environment.ALLEGRO_URL.getActiveOffers}`,
        { search: params,
          headers: headers });
  }

  getEbayActiveAuctions(pageSize: string = '20', pageNumber: string = '0'): Observable<Response> {
    const params = {
      'limit': pageSize,
      'offset': pageNumber
    };
    const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8;',
      'Authorization': this.authService.getAuthToken() });

    return this.http
      .post(`${environment.API_URL}${environment.EBAY_URL.getActiveOffers}`,
        JSON.stringify(params),
        { headers: headers });
  }

}
