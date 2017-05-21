import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { NewAuctionComponent } from './new-auction.component';
import { NewAuctionRoutingModule } from './new-auction.routing';
import { NewAuctionService } from './new-auction.service';

@NgModule({
  declarations: [
    NewAuctionComponent
  ],
  imports: [
    NewAuctionRoutingModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    NewAuctionService
  ]
})
export class NewAuctionModule {}
