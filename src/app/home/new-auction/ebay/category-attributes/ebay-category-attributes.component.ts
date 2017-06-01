import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EbayCategoryAttributesService} from './ebay-category-attributes.service';
import {AuthService} from '../../../../_services/auth.service';
import {Attribute} from './attribute.interface';

@Component({
  selector: 'ebay-category-attributes',
  templateUrl: './ebay-category-attributes.component.html'
})
export class EbayCategoryAttributesComponent implements OnInit {

  @Input() categoryNumber: number;

  private attributes: Attribute[] = [];
  private attributesFormGroup: FormGroup;
  private picturesBase64 = {};


  constructor(private ebayCategoryAttributesService: EbayCategoryAttributesService,
              private authService: AuthService) {}


  ngOnInit(): void {
    this.getCategoryAttributes(this.categoryNumber);
  }

  private getCategoryAttributes(categoryNumber: number) {
    this.ebayCategoryAttributesService
      .getCategoryAttributes(2988)
      .subscribe(
        (data) => {
          const body = data.json();
          console.log(body);
          // this.attributes = body.fields;
          //
          // this.attributesFormGroup = this.ebayCategoryAttributesService.toFormGroup(this.attributes);
        },
        (err) => console.error(err)
      );
  }

  private getFile(event): void {
    const formControlNumber = event.target.dataset.pic;
    const picCache = this.picturesBase64;
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      //TODO Find better way to cache images
      //picCache[formControlNumber] = reader.result;
      console.log(`Pic ${formControlNumber} load`);
    };
  }

  private addNewAuction(): void {
    //TODO remove null and empty attributes
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

      parameters.push({ 'id': id, 'value': value });
    }

    requestBody['parameters'] = parameters;

    console.log(requestBody);
    // console.log(JSON.stringify(requestBody));
  }

}
