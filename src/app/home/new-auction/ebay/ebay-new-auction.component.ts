import { Component } from '@angular/core';

@Component({
  selector: 'ebay-new-auction',
  templateUrl: 'ebay-new-auction.component.html',
  styleUrls: ['./ebay-new-auction.component.scss']
})
export class EbayNewAuctionComponent {

  chosenCategoryId: number;

  updateCategoryId(categoryId): void {
    this.chosenCategoryId = categoryId;
    console.log(categoryId);
  }

}
