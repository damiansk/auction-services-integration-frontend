import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NewAuctionService } from './new-auction.service';
import { Attribute, Category } from './attribute-interface';

import { AuthService } from '../../_services/auth.service';

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

  private categories: { 'categories': Category[] };
  private attributes: Attribute[] = [];
  private attributesFormGroup: FormGroup;
  private picturesBase64 = {};
  private categoryNav = [];

  constructor(private newAuctionService: NewAuctionService,
              private authService: AuthService) {}

  ngOnInit() {
    // this.updateCategoryList();
  }

  private getCategoryAttributes(categoryNumber: number) {
    this.newAuctionService
      .getCategoryAttributes(categoryNumber)
      .subscribe(
        (data) => {
          const body = data.json();
          console.log(body);
          this.attributes = body.parameters;

          this.attributesFormGroup = this.newAuctionService.toFormGroup(this.attributes);
        },
        (err) => console.error(err)
      );
  }

  private getCategoryList() {
    // this.newAuctionService
    //   .getAllegroCategoryList()
    //   .subscribe(
    //     response => {
    //       this.updateAuthToken(response.headers.get('authorization'));
    //       this.categories = response.json();
    //       console.log(this.categories);
    //     },
    //     err => console.error(err)
    //   );
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

    const requestBody = { 'userId': this.authService.getEmail() };
    const parameters = [];

    for (const attribute in attributes ) {
      const id = attribute;
      let value;
      let subAttributes;

      if ( attributes[attribute] !== null ) {
        subAttributes = Object.keys(attributes[attribute]);
      }

      if ( subAttributes && typeof subAttributes === 'string' ) {
        value = [];

        for (const attr of attributes[attribute]) {
          if (attributes[attribute][attr] !== null) {
            value.push(attributes[attribute][attr]);
          }
        }

      } else {
        value = attributes[attribute];
      }

      parameters.push({ 'id': id,
                        'value': value });
    }

    requestBody['parameters'] = parameters;

    console.log(requestBody);
    // console.log(JSON.stringify(requestBody));
  }

  updateAllegroCategorySelect(event): void {
    const categoryName = event.target.value;

    for (let category of this.categories.categories ) {
      if ( category.name === categoryName ) {
        const subcategories = category.subcategories;

        if (subcategories.length) {
          this.categories.categories = subcategories;
          this.categoryNav.push(category.name);
        } else {
          this.getCategoryAttributes(category.id);
        }

        break;
      }
    }

  }

  private updateAuthToken(token: string) {
    this.authService.setAuthToken(token);
  }

}
