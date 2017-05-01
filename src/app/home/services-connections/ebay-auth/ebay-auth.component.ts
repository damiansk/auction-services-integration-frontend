import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import { AuthService } from '../../../_services/auth.service';

import { environment } from '../../../../environments/environment';


@Component({
  selector: 'ebay-auth',
  templateUrl: './ebay-auth.component.html'
})
export class EbayAuthComponent implements OnInit {

  private headers: Headers;
  private expirationTime: string;

  constructor(private http: Http,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.appendSecureHeaders();
    this.getAccountExpirationTime();
  }

  getActivationLink(): void {
    this.http
      .get(`${environment.API_URL}${environment.EBAY_URL.authRedirect}${this.authService.getEmail()}`,
            {headers: this.headers})
      .subscribe(
        response => {
          this.updateAuthToken(response.headers.get('authorization'));
          window.location.href = response.json().redirectionUrl;
        },
        err => console.error( err )
      );
  }

  getAccountExpirationTime(): void {
    this.http
      .get(`${environment.API_URL}${environment.EBAY_URL.getTokenExpirationDate}${this.authService.getEmail()}`,
        new RequestOptions({headers: this.headers}) )
      .subscribe(
        response => {
          this.updateAuthToken(response.headers.get('authorization'));
          const dataJSON = response.json();
          if (dataJSON.isActive === true) {
            this.expirationTime = dataJSON.expirationTime;
          }
        },
        err => console.error(err)
      )
  }

  private appendSecureHeaders() {
    this.headers = new Headers();
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Authorization', this.authService.getAuthToken());
  }

  private updateAuthToken(token: string) {
    this.authService.setAuthToken(token);
  }

}
