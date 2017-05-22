import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewAuctionComponent } from './new-auction.component';
import { NewAuctionRoutingModule } from './new-auction.routing';
import { NewAuctionService } from './new-auction.service';

import { TextAttributeComponent } from './attributes-inputs/text-attribute.component';
import { ComboboxAttributeComponent } from './attributes-inputs/combobox-attribute.component';

@NgModule({
  declarations: [
    NewAuctionComponent,
    TextAttributeComponent,
    ComboboxAttributeComponent
  ],
  imports: [
    NewAuctionRoutingModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    NewAuctionService
  ]
})
export class NewAuctionModule {}
