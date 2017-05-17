import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';

import { AuthService } from '../../../../_services/auth.service';

import { AllegroAuthService } from './allegro-auth.service';


@Component({
  selector: 'allegro-auth',
  templateUrl: './allegro-auth.component.html',
  styleUrls: ['./allegro-auth.component.scss']
})
export class AllegroAuthComponent implements OnInit {

  private expirationTime: string;
  private isActive: boolean = false;
  private statusColor: string;

  private red: string = '#ff7272';
  private green: string = 'rgba(124, 251, 81, 0.63)';

  constructor(private authService: AuthService,
              private cookieService: CookieService,
              private allegroAuthService: AllegroAuthService) {}

  ngOnInit(): void {
    this.updateAccountExpirationTime();
  }

  updateAccountExpirationTime(): void {
    this.allegroAuthService
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
    this.allegroAuthService
      .getActivationLink()
      .subscribe(
        response => {
          this.updateAuthToken(response.headers.get('authorization'));

          const responseBody = response.json();
          this.cookieService.set('authToken', responseBody.authToken);
          window.location.href = responseBody.allegroAuthUrl;
        },
        err => console.error( err )
      );
  }

  private updateAuthToken(token: string) {
    this.authService.setAuthToken(token);
  }

  private updateAccountStatus(status: any) {
    if ( status.expirationDate ) {
      this.expirationTime = status.expirationDate;
      this.isActive = status.active;
      this.statusColor = status.active ? this.green : this.red;
      if (status.active) {
        document.getElementById('allegro-connection-button').style.display = 'none';
      }
    }
  }

  getExpirationDate(): string {
    return this.expirationTime ? this.allegroAuthService.decodeDate(new Date(this.expirationTime)) : '-';
  }

  public connectAccount(code: string): void {
    const authToken = this.cookieService.get('authToken');
    if ( code && authToken ) {
      this.allegroAuthService
        .connectAccount(code, authToken)
        .subscribe(
          response => {
            this.updateAuthToken(response.headers.get('authorization'));
            console.log('activated');
            this.updateAccountExpirationTime();
          },
          err => console.error(err)
        );
    }
  }

}
