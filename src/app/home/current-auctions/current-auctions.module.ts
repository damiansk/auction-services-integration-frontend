import { NgModule } from '@angular/core';

import { CurrentAuctionsComponent } from './current-auctions.component';
import { CurrentAuctionsRoutingModule } from './current-auctions.routing';

@NgModule({
  declarations: [
    CurrentAuctionsComponent
  ],
  imports: [
    CurrentAuctionsRoutingModule
  ]
})
export class CurrentAuctionsModule {}
