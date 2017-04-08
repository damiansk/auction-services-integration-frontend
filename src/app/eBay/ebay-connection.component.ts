import { Component } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'ebay-connection',
  template: '<a href="#">Connect Your Account</a>'
})
export class EbayConnectionComponent {

  private email = 'test@test.test';

  constructor(public http: Http) {}

  connectEbayAccount(): void {

  }

}
