import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EbayCategoryAttributesService} from './ebay-category-attributes.service';
import {AuthService} from '../../../../_services/auth.service';
import {Attribute} from './attribute.interface';
import {Observable} from 'rxjs/Observable';

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
    Observable.forkJoin([
      this.ebayCategoryAttributesService.getCategoryAttributes(2988).map( data => data.json()),
      this.ebayCategoryAttributesService.getPaymentPolicy().map( data => data.json()),
      this.ebayCategoryAttributesService.getFulfillmentPolicy().map( data => data.json()),
      this.ebayCategoryAttributesService.getReturnPolicy().map( data => data.json())
    ]).subscribe(
      (data) => {
        console.log(data);

        const aspects = data[0].aspects;
        const fields = data[0].fields;
        this.attributes = aspects.concat(fields);

        const paymentPolicies = data[1].paymentPolicies.map( data => {
         return {
           'id': data.paymentPolicyId,
           'value': data.name
         }
        });
        const fulfillmentPolicies = data[2].fulfillmentPolicies.map( data => {
          return {
            'id': data.fulfillmentPolicyId,
            'value': data.name
          }
        });
        const returnPolicies = data[3].returnPolicies.map( data => {
          return {
            'id': data.returnPolicyId,
            'value': data.name
          }
        });

        this.attributes
          .map( attr => attr.id == '13' ? attr.possibleValues = paymentPolicies : attr )
          .map( attr => attr.id == '12' ? attr.possibleValues = returnPolicies : attr )
          .map( attr => attr.id == '11' ? attr.possibleValues = fulfillmentPolicies : attr );


        console.log(this.attributes);

        this.attributesFormGroup = this.ebayCategoryAttributesService.toFormGroup(this.attributes);
      }
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

    let newParameters = parameters.filter( data => !isNaN(parseInt(data.id)) );
    let newAspects = parameters
      .filter( data => isNaN(parseInt(data.id)) )
      .map( data => {
        const temp = {};
        temp[data.id] = data.value;
        return temp;
      } );

    newParameters[25] = newAspects;
    console.log(newParameters);

    requestBody['parameters'] = newParameters;

    console.log(requestBody);
    // console.log(JSON.stringify(requestBody));
  }

}
