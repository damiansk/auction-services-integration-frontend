import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NewAuctionService } from './new-auction.service';
import { Attribute } from './attribute-interface';

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

  private attributes: Attribute[] = [];
  private form: FormGroup;

  constructor(private newAuctionService: NewAuctionService) {}

  ngOnInit() {
    this.newAuctionService
      .getCategoryParameters(20)
      .subscribe(
        (data) => {
          const body = data.json();
          this.attributes = body.parameters;
          console.log(this.attributes);

          this.form = this.newAuctionService.toFormGroup(this.attributes);
        },
        (err) => console.error(err)
      );

  }

  private addNewAuction(): void {
    console.log( this.form.value );
    console.log( this.form );
  }

}
