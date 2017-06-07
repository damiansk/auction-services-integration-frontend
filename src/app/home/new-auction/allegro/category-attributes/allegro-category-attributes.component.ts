import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Attribute} from './attribute.interface';
import {AllegroCategoryAttributesService} from './allegro-category-attributes.service';
import {AuthService} from '../../../../_services/auth.service';

@Component({
  selector: 'allegro-category-attributes',
  templateUrl: './allegro-category-attributes.component.html',
  styleUrls: ['./allegro-category-attributes.component.scss']
})
export class AllegroCategoryAttributesComponent implements OnInit {

  @Input() categoryNumber: number;

  private attributes: Attribute[] = [];
  private attributesFormGroup: FormGroup;
  private imagesCache = [];


  constructor(private allegroCategoryAttributesService: AllegroCategoryAttributesService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getCategoryAttributes(this.categoryNumber);
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

      this.imagesCache.push(file);
      reader.onload = (e: any) => {
        this.showAddedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

  private showAddedImage(pic): void{
    const newImg = document.createElement('img');
    newImg.src = pic;
    newImg.style.width = `${100}px`;
    newImg.style.height = `${100}px`;
    document.getElementById('pictures').appendChild(newImg);
    console.dir(newImg);
  }

  private addNewAuction(): void {
    const attributes = this.attributesFormGroup.value;
    const requestBody = {'userId': this.authService.getEmail()};

    requestBody['parameters'] = Object.keys(attributes)
      .map( key => ({ 'id': key,
                      'value': this._decodeValue(attributes[key]) })
      )
      .filter( attribute => attribute['value'] !== null );

    console.log(requestBody);
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
