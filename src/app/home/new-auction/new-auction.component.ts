import { Component, OnInit } from '@angular/core';

import { NewAuctionService } from './new-auction.service';

@Component({
  selector: 'new-auction',
  templateUrl: './new-auction.component.html'
})
export class NewAuctionComponent implements OnInit {

  private fieldType: string[] = [
    'STRING',
    'INTEGER',
    'FLOAT',
    'IMAGE',
    'DATETIME',
    'DATE'
  ];

  private formType: string[] = [
    'STRING',
    'INTEGER',
    'FLOAT',
    'COMBOBOX',
    'RADIOBUTTON',
    'CHECKBOX',
    'IMAGE',
    'TEXTAREA',
    'DATETIME',
    'DATE'
  ];

  constructor(private newAuctionService: NewAuctionService) {}

  ngOnInit() {
    this.newAuctionService
      .getCategoryParameters(20)
      .subscribe(
        (data) => console.log(data.json()),
        (err) => console.error(err)
      );
  }

}
