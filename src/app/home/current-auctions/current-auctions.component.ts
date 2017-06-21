import {Component, OnInit} from '@angular/core';

import {CurrentAuctionsService} from './current-auctions.service';

import {AuthService} from '../../_services/auth.service';
import {Offer} from './offer/offer.interface';


@Component({
  selector: 'current-auctions',
  templateUrl: './current-auctions.component.html'
})
export class CurrentAuctionsComponent implements OnInit {

  private offers: Offer[] = [];

  constructor(private currentAuctionService: CurrentAuctionsService,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.currentAuctionService
      .getEbayActiveAuctions()
      .subscribe( data => {
        this.authService.setAuthToken( data.headers.get('authorization') );
        this.showOffers((data.json()).genericOfferDTOS);
      } );
  }

  private showOffers(offers) {
    this.offers = this.decodeOffers(offers);
  }

  private decodeOffers(offers: any) {
    return offers;
  }
}
