import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EbayAuthComponent } from './ebay-auth/ebay-auth.component';
import { AllegroAuthComponent } from './allegro-auth/allegro-auth.component';

@Component({
  selector: 'services-connections',
  templateUrl: './services-connections.component.html'
})
export class ServicesConnectionsComponent implements OnInit {

  @ViewChild(EbayAuthComponent)ebayAuth: EbayAuthComponent;
  @ViewChild(AllegroAuthComponent)allegroAuth: AllegroAuthComponent;

  private serviceParameter: string;
  private optionParameter: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route
      .params
      .subscribe( params => {
          this.serviceParameter = params['service'];
          // this.optionParameter = params['options'];
        }
      );

    //if ( this.serviceParameter && this.optionParameter ) {
    if ( this.serviceParameter ) {
      this.route
        .queryParams
        .subscribe( queryParams =>
          this.activateChildRoute(queryParams)
        );
    }
  }

  //TODO option - remove
  private activateChildRoute(params: Params): void {
    // switch (this.optionParameter) {
    //   case 'accepted': {
    //     if (this.serviceParameter === 'ebay') {
    //       this.ebayAuth.connectAccount(params['state'], params['code']);
    //     }
    //   }
    // }

    if (this.serviceParameter === 'ebay') {
      this.ebayAuth.connectAccount(params['state'], params['code']);
    }

    if (this.serviceParameter === 'allegro') {
      this.allegroAuth.connectAccount(params['code']);
    }
  }

}
