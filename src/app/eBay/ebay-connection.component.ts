import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import {environment} from '../../environments/environment';


@Component({
  selector: 'ebay-connection',
  template: '<a href="{{link}}">Connect Your Account</a>'
})
export class EbayConnectionComponent implements OnInit {

  private email = 'test@test.test';
  private link = '#';

  constructor(public http: Http) {}

  ngOnInit(): void {
    this.setActivationLink();
  }

  setActivationLink(): void {
    this.http.get( `${environment.API_URL}/api/v1/ebay/auth/redirect/${this.email}`)
      .subscribe(
        data => this.link = data.text(),
        err => console.error(err)
      );

  }

}
