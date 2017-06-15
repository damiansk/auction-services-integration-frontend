import { NgModule } from '@angular/core';

import { CurrentAuctionsComponent } from './current-auctions.component';
import { CurrentAuctionsRoutingModule } from './current-auctions.routing';
import { CurrentAuctionsService } from './current-auctions.service';
import { CommonModule } from '@angular/common';
import {OfferComponent} from './offer/offer.component';

@NgModule({
  declarations: [
    CurrentAuctionsComponent,
    OfferComponent
  ],
  imports: [
    CurrentAuctionsRoutingModule,
    CommonModule
  ],
  providers: [
    CurrentAuctionsService
  ]
})
export class CurrentAuctionsModule {}
