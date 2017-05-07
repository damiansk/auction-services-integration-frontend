import { NgModule } from '@angular/core';

import { AuctionsHistoryComponent } from './auctions-history.component';
import { AuctionsHistoryRoutingModule } from './auctions-history.routing';

@NgModule({
  declarations: [
    AuctionsHistoryComponent
  ],
  imports: [
    AuctionsHistoryRoutingModule
  ]
})
export class AuctionsHistoryModule {}
