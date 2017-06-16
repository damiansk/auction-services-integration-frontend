import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAuctionComponent } from './new-auction.component';
import {EbayNewAuctionComponent} from './ebay/ebay-new-auction.component';
import {AllegroNewAuctionComponent} from './allegro/allegro-new-auction.component';

const routes: Routes = [
  { path: '', component: NewAuctionComponent,
    children: [
      { path: 'ebay-new-auction', component: EbayNewAuctionComponent },
      { path: 'allegro-new-auction', component: AllegroNewAuctionComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAuctionRoutingModule {}
