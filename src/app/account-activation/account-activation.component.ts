import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';


@Component({
  selector: 'account-activation',
  templateUrl: './account-activation.component.html'
})
export class AccountActivationComponent implements OnInit {

  private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8;'});
  private token: string;

  constructor(private http: Http,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'] || '';

    this.http
      .post(`${environment.API_URL}${environment.AUTH_URL.accountActivation}/${this.token}`,
        {},
        {headers: this.headers})
      .subscribe(
        () => {
          document.getElementById('message').textContent = "Twoje konto zostalo aktywowane, aby przejsc do logowania nacisnij ponizszy przycisk.";
        },
        err => {
          console.error(err);
          document.getElementById('message').textContent = "W wyniku bledy Twoje konto nie zostalo aktywowane. Prosze skontaktowac sie z administaratorem.";
        }
      );
  }

  goToLogin():void {
    this.router.navigate([''], {relativeTo: this.route});

  }

}


