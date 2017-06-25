import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EbayCategoryAttributesService} from './ebay-category-attributes.service';
import {AuthService} from '../../../../_services/auth.service';
import {Attribute} from './attribute.interface';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ebay-category-attributes',
  templateUrl: './ebay-category-attributes.component.html',
  styleUrls: ['./ebay-category-attributes.component.scss']
})
export class EbayCategoryAttributesComponent implements OnChanges {

  @Input() categoryNumber: number;
  @ViewChild('pictures') pictures: ElementRef;

  private attributes: Attribute[] = [];
  private attributesFormGroup: FormGroup;

  private imagesCache = [];


  constructor(private ebayCategoryAttributesService: EbayCategoryAttributesService,
              private authService: AuthService) {}


  ngOnChanges(): void {
    if (!this.categoryNumber) {
      this.attributes= [];
      delete(this.attributesFormGroup);
      this.imagesCache = [];
    } else {
      this.getCategoryAttributes(this.categoryNumber);
    }
  }


  private getCategoryAttributes(categoryNumber: number) {
    Observable.forkJoin([
      this.ebayCategoryAttributesService.getCategoryAttributes(categoryNumber).map( data => data.json()),
      this.ebayCategoryAttributesService.getPaymentPolicy().map( data => data.json()),
      this.ebayCategoryAttributesService.getFulfillmentPolicy().map( data => data.json()),
      this.ebayCategoryAttributesService.getReturnPolicy().map( data => data.json()),
      this.ebayCategoryAttributesService.getLocation().map( data => data.json())
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
        const location = data[4].locations.map( data => {
          return {
             'id': data.merchantLocationKey,
             'value': data.name
          }
        });

        console.log(location);

        this.attributes
          .map( attr => attr.id == '14' ? attr.possibleValues = location : attr )
          .map( attr => attr.id == '13' ? attr.possibleValues = paymentPolicies : attr )
          .map( attr => attr.id == '12' ? attr.possibleValues = returnPolicies : attr )
          .map( attr => attr.id == '11' ? attr.possibleValues = fulfillmentPolicies : attr );


        // console.log(this.attributes);

        this.attributesFormGroup = this.ebayCategoryAttributesService.toFormGroup(this.attributes);

      }
    );
  }

  private addImage(event): void {
    if ( event.target.files && event.target.files[0] ) {
      const reader = new FileReader();
      const file = event.target.files[0];

      reader.onload = (e: any) => {
        //TODO cut unnecessary begin 'data:image/jpeg;base64,'
        this._connectAddedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

  private _connectAddedImage(base64: string): void{
    const nodeHTMLCollection = this.pictures.nativeElement.children;
    const nodeList = Array.prototype.slice.call(nodeHTMLCollection);
    const firstEmptyTag = nodeList.filter(node => node.src === '')[0];

    firstEmptyTag.src = base64;
    firstEmptyTag.style.display = 'inline-flex';

    this.imagesCache.push({
      'id': firstEmptyTag.dataset.picid,
      'value': firstEmptyTag
    });
  }

  private addNewAuction(): void {
    //TODO remove null and empty attributes
    const attributes = this.attributesFormGroup.value;
    for (let obj in this.imagesCache) {
      attributes[obj] = this.imagesCache[obj];
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

      parameters.push({ 'id': id, 'value': `${value}`});
    }

    let newParameters = parameters.filter( data => !isNaN(parseInt(data.id)) );
    let newAspects = {};
    parameters
      .filter( data => isNaN(parseInt(data.id)) )
      .forEach( data => {
        // const temp = {};
        if ( data.value != 0 ) {
          newAspects[`${data.id}`] = data.value;
        }
        // return temp;
      } );


    // newParameters[25] = newAspects;

    requestBody['idToValueMap'] = newParameters;

    this.imagesCache
      .forEach( image => {
        requestBody['idToValueMap']
          .filter( dataObj => dataObj.id == '16' )
          .forEach( dataObj => dataObj.value = (image['value'].src).slice(23));
          // .push({
          //   'id': image['id'],
          //   'value': (image['value'].src).slice(23)
          // })
      });

    requestBody['idToValueMap']
      .filter( dataObj => dataObj.id == '25' )
      .forEach( dataObj => dataObj.value = newAspects);

    let newRequestBody = {};
    let idToValueMap = {};

    requestBody['idToValueMap']
      .forEach( mapObj => {
        idToValueMap[mapObj.id] = mapObj.value;
      });

    idToValueMap['3'] = this.categoryNumber;

    newRequestBody['idToValueMap'] = idToValueMap;

    console.log(newRequestBody);
    this.ebayCategoryAttributesService.addAuction( JSON.stringify(newRequestBody) )
      .subscribe(
        data => console.log(data),
        err => console.error(err)
      );
  }

}
