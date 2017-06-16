import { Component } from '@angular/core';

@Component({
  selector: 'allegro-new-auction',
  templateUrl: './allegro-new-auction.component.html',
  styleUrls: ['./allegro-new-auction.component.scss']
})
export class AllegroNewAuctionComponent {

  chosenCategoryId: number;

  updateCategoryId(categoryId): void {
    this.chosenCategoryId = categoryId;
    console.log(categoryId);
  }


}
