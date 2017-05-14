import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';

import { AuthService } from '../../../../_services/auth.service';

import {EbayAuthService} from './ebay-auth.service';


@Component({
  selector: 'ebay-auth',
  templateUrl: './ebay-auth.component.html'
})
export class EbayAuthComponent implements OnInit {

  private expirationTime: string;

  constructor(private authService: AuthService,
              private ebayAuthService: EbayAuthService) {}

  ngOnInit(): void {
    this.getAccountExpirationTime();
  }

  getAccountExpirationTime(): void {
    this.ebayAuthService
      .getAccountExpirationTime()
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

  getActivationLink(): void {
    this.ebayAuthService
      .getActivationLink()
      .subscribe(
        response => {
          this.updateAuthToken(response.headers.get('authorization'));
          window.location.href = response.json().redirectionUrl;
        },
        err => console.error( err )
      );
  }

  private updateAuthToken(token: string) {
    this.authService.setAuthToken(token);
  }

}
