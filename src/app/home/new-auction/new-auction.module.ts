import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewAuctionComponent } from './new-auction.component';
import { NewAuctionRoutingModule } from './new-auction.routing';
import { NewAuctionService } from './new-auction.service';

import { AllegroCategoryComponent } from './allegro/allegro-category.component';
import { AllegroCategoryService } from './allegro/allegro-category.service';
import { EbayCategoryComponent } from './ebay/ebay-category.component';
import { EbayCategoryService } from './ebay/ebay-category.service';

@NgModule({
  declarations: [
    NewAuctionComponent,
    AllegroCategoryComponent,
    EbayCategoryComponent
  ],
  imports: [
    NewAuctionRoutingModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    NewAuctionService,
    AllegroCategoryService,
    EbayCategoryService
  ]
})
export class NewAuctionModule {}
