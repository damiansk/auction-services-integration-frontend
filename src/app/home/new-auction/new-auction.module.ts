import { NgModule } from '@angular/core';

import { NewAuctionComponent } from './new-auction.component';
import { NewAuctionRoutingModule } from './new-auction.routing';

@NgModule({
  declarations: [
    NewAuctionComponent
  ],
  imports: [
    NewAuctionRoutingModule
  ]
})
export class NewAuctionModule {}
