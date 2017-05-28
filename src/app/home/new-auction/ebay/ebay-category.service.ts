import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { AuthService } from '../../../_services/auth.service';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class EbayCategoryService {

  constructor(private http: Http,
              private authService: AuthService) {}

  public getCategoryRootId(marketplace: string): Observable<Response> {
    return this.http.get(`${environment.API_URL}${environment.EBAY_URL.getCategoryRootId}${marketplace}`,
      {headers: new Headers( {
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAuthToken()} )
      });
  }

  public getCategory(categoryRootId: string, categoryId: string = '0'): Observable<Response> {
    return this.http.get(`${environment.API_URL}${environment.EBAY_URL.getCategory}${categoryRootId}/${categoryId}`,
      {headers: new Headers( {
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAuthToken()} )
      });
  }

  public updateAuthToken(token: string) {
    this.authService.setAuthToken(token);
  }

}
