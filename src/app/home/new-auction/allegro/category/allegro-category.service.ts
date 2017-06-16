import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { AuthService } from '../../../../_services/auth.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class AllegroCategoryService {

  constructor(private http: Http,
              private authService: AuthService) {}

  getCategoryList(categoryId: string): Observable<Response> {
    return this.http
      .get(`${environment.API_URL}${environment.ALLEGRO_URL.getCategoryList}${categoryId}`,
        {headers: new Headers( {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAuthToken()} )
        });
  }

  public updateAuthToken(token: string) {
    this.authService.setAuthToken(token);
  }

}
