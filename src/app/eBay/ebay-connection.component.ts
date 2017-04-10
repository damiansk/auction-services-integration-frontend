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
  private link = 'https://signin.sandbox.ebay.com/ws/eBayISAPI.dll?SignIn&runame=Jakub_Ma_yjasia-JakubMay-Integr-hjbmyjci&oauthparams=%26state%3Dtest%2540test.test%26client_id%3DJakubMay-Integrat-SBX-62466ad41-f091a9fe%26redirect_uri%3DJakub_Ma_yjasia-JakubMay-Integr-hjbmyjci%26response_type%3Dcode%26device_id%3Dnull%26display%3Dnull%26scope%3Dhttps%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.inventory.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.inventory+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.account.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.account%26tt%3D1';

  constructor(public http: Http) {}

  ngOnInit(): void {
    //this.setActivationLink();
  }

  setActivationLink(): void {
    this.http.get( `${environment.API_URL}/api/v1/ebay/auth/redirect/${this.email}`)
      .subscribe(
        data => this.link = data.text(),
        err => console.error(err)
      );

  }

}
