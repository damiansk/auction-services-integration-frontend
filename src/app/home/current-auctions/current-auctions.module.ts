import { NgModule } from '@angular/core';

import { CurrentAuctionsComponent } from './current-auctions.component';
import { CurrentAuctionsRoutingModule } from './current-auctions.routing';
import { CurrentAuctionsService } from './current-auctions.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CurrentAuctionsComponent
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
