import {Component, OnInit} from '@angular/core';

import {CurrentAuctionsService} from './current-auctions.service';

import {AuthService} from '../../_services/auth.service';
import {Offer} from './offer/offer.interface';

import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'current-auctions',
  templateUrl: './current-auctions.component.html'
})
export class CurrentAuctionsComponent implements OnInit {

  private offers: Offer[] = [];

  constructor(private currentAuctionService: CurrentAuctionsService,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.currentAuctionService.getEbayActiveAuctions()
      .subscribe( data => {
        this.authService.setAuthToken( data.headers.get('authorization') );
        this.showOffers((data.json()).genericOfferDTOS);
      } );

    this.currentAuctionService.getAllegroActiveAuctions()
      .subscribe( data => {
        this.authService.setAuthToken( data.headers.get('authorization') );
        this.showOffers((data.json()).genericOfferDTOS);
      } );
  }

  private showOffers(offers) {
    this.offers.push( ...this.decodeOffers(offers) );
    this.shuffle( this.offers );
    console.log(this.offers);
  }

  private decodeOffers(offers: any) {
    return offers;
  }

  private shuffle(array) {
  for (let i = array.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }
}
}
