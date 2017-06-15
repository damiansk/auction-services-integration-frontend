import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Attribute} from './attribute.interface';
import {AllegroCategoryAttributesService} from './allegro-category-attributes.service';
import {AuthService} from '../../../../_services/auth.service';

@Component({
  selector: 'allegro-category-attributes',
  templateUrl: './allegro-category-attributes.component.html',
  styleUrls: ['./allegro-category-attributes.component.scss']
})
export class AllegroCategoryAttributesComponent implements OnChanges {

  @Input() categoryId: number;
  @ViewChild('pictures') pictures: ElementRef;

  private attributes: Attribute[] = [];
  private attributesFormGroup: FormGroup;
  private imagesCache = [];


  constructor(private allegroCategoryAttributesService: AllegroCategoryAttributesService,
              private authService: AuthService) {}

  ngOnChanges(): void {
    if (!this.categoryId) {
      this.attributes= [];
      delete(this.attributesFormGroup);
      this.imagesCache = [];
    } else {
      this.getCategoryAttributes(this.categoryId);
    }
  }

  private getCategoryAttributes(categoryNumber: number) {
    this.allegroCategoryAttributesService
      .getCategoryAttributes(categoryNumber)
      .subscribe(
        (data) => {
          this.allegroCategoryAttributesService.updateAuthToken(data.headers.get('authorization'));
          const body = data.json();
          console.log(body);

          this.attributes = body.parameters;

          this.attributesFormGroup = this.allegroCategoryAttributesService.toFormGroup(this.attributes);
        },
        (err) => console.error(err)
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
    const formGroupValues = this.attributesFormGroup.value;
    console.log(this.attributesFormGroup);
    console.log(formGroupValues);
    const requestBody = {'userId': this.authService.getEmail()};

    requestBody['parameters'] = Object.keys(formGroupValues)
      .map( key => ({ 'id': key,
                      'value': this._decodeValue(formGroupValues[key]) })
      )
      .filter( attribute => attribute['value'] !== null );

    this.imagesCache
      .forEach( image => {
        requestBody['parameters']
          .push({
            'id': image['id'],
            'value': image['value'].src
          })
      });

    console.log(requestBody);
/*    this.allegroCategoryAttributesService
      .addAuction(JSON.stringify(requestBody))
      .subscribe( data => console.log(data),
                  err => console.error(err) );*/
  }


  private _decodeValue(value: any): string {
    if ( value !== null && typeof value === 'object' ) {
     return `${Object.keys(value)
      .filter( id => value[id] )
      .map( id => parseInt(id) )
      .reduce( (currentValue, newValue) => currentValue + newValue, 0 )}` || null;
    }
    return value;
  }

}
