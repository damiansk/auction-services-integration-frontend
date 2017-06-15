import {Component, OnInit} from '@angular/core';

import {CurrentAuctionsService} from './current-auctions.service';

import {AuthService} from '../../_services/auth.service';

@Component({
  selector: 'current-auctions',
  templateUrl: './current-auctions.component.html'
})
export class CurrentAuctionsComponent implements OnInit {

  constructor(private currentAuctionService: CurrentAuctionsService,
              private authService: AuthService) {}

  ngOnInit(): void {

  }

  test() {
    this.currentAuctionService
      .getAllegroActiveAuctions()
      .subscribe(
        data => console.log((data.json()).genericOfferDTOS),
        err => console.error(err)
      );
  }

}
