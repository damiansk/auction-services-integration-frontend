import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthService } from '../../../_services/auth.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AllegroCategoryService {

  constructor(private http: Http,
              private authService: AuthService) {}

  getCategoryList(): Observable<Response> {
    return this.http
      .get(`${environment.API_URL}${environment.ALLEGRO_URL.getCategoryList}`,
        {headers: new Headers( {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAuthToken()} )
        });
  }


}
