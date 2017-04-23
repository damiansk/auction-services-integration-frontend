import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';


@Component({
  selector: 'ebay-auth',
  templateUrl: './ebay-auth.component.html'
})
export class EbayAuthComponent implements OnInit {

  private email = 'test@gmail.com';
  private expirationTime: string;

  constructor(public http: Http) {}

  ngOnInit(): void {
    this.getAccountExpirationTime();
  }

  getActivationLink(): void {
    this.http
      .get(`${environment.API_URL}${environment.EBAY_URL.authRedirect}${this.email}`)
      .subscribe(
        data => window.location.href = data.json().redirectionUrl,
        err => console.error(err)
      );
  }

  getAccountExpirationTime(): void {
    this.http
      .get(`${environment.API_URL}${environment.EBAY_URL.getTokenExpirationDate}${this.email}`)
      .subscribe(
        data => {
          const dataJSON = data.json();
          if (dataJSON.isActive === true) {
            this.expirationTime = dataJSON.expirationTime;
          }
        },
        err => console.error(err)
      )
  }

}
