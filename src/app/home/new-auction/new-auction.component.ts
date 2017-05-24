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
  private attributesFormGroup: FormGroup;
  private picturesBase64 = {};

  constructor(private newAuctionService: NewAuctionService) {}

  ngOnInit() {
    this.newAuctionService
      .getCategoryParameters(20)
      .subscribe(
        (data) => {
          const body = data.json();
          this.attributes = body.parameters;

          this.attributesFormGroup = this.newAuctionService.toFormGroup(this.attributes);
        },
        (err) => console.error(err)
      );

  }

  getFile(event): void {
    const formControlNumber = event.target.dataset.pic;
    const picCache = this.picturesBase64;
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      picCache[formControlNumber] = reader.result;
      console.log(`Pic ${formControlNumber} load`);
    };
  }

  private addNewAuction(): void {
    const attributes = this.attributesFormGroup.value;
    for (let obj in this.picturesBase64) {
      attributes[obj] = this.picturesBase64[obj];
    }

    console.log(attributes);
  }



}
