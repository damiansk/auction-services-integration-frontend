import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../_services/auth.service';

import { EbayAuthService } from './ebay-auth.service';


@Component({
  selector: 'ebay-auth',
  templateUrl: './ebay-auth.component.html',
  styleUrls: ['./ebay-auth.component.scss']
})
export class EbayAuthComponent implements OnInit {

  private green: string = 'rgb(105, 226, 127)';
  private red: string = '#ff7272';

  private expirationTime: string;
  private isActive: boolean = false;
  private statusColor: string = this.red;

  constructor(private authService: AuthService,
              private ebayAuthService: EbayAuthService) {}

  ngOnInit(): void {
    this.updateAccountExpirationTime();
  }

  updateAccountExpirationTime(): void {
    this.ebayAuthService
      .getAccountExpirationTime()
      .subscribe(
        response => {
          this.updateAuthToken(response.headers.get('authorization'));
          this.updateAccountStatus(response.json());
        },
        (err) => {}
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

  private updateAccountStatus(status: any) {
    if ( status.expirationTime ) {
      this.expirationTime = status.expirationTime;
      this.isActive = status.isActive;
      this.statusColor = status.isActive ? this.green : this.red;
      if (status.isActive) {
        document.getElementById('ebay-connection-button').style.display = 'none';
      }
    }
  }

  getExpirationDate(): string {
    return this.expirationTime ? this.ebayAuthService.decodeDate(new Date(this.expirationTime)) : '-';
  }

  public connectAccount(state: string, code: string): void {
    if ( state && code ) {
      this.ebayAuthService
        .connectAccount(state, code)
        .subscribe(
          response => {
            this.updateAuthToken(response.headers.get('authorization'));
            this.updateAccountExpirationTime();
          },
          err => console.error(err)
        );
    }
  }

}
