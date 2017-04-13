import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import {environment} from '../../environments/environment';


@Component({
  selector: 'ebay-connection',
  template: '<button (click)="getActivationLink()">Connect Your Account</button>'
})
export class EbayConnectionComponent implements OnInit {

  private email = 'test@test.test';

  constructor(public http: Http) {}

  ngOnInit(): void {

  }

  getActivationLink(): void {
    this.http.get( `${environment.API_URL}/api/v1/ebay/auth/redirect/${this.email}`)
      .subscribe(
        data => {
          console.log( data );
          //window.location.href= ;
        },
        err => console.error(err)
      );

  }

}
