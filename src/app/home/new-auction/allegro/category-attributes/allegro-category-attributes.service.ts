import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, ResponseType, Headers } from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../../../_services/auth.service';
import { environment, mocks } from '../../../../../environments/environment';
import { Attribute } from './attribute.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AllegroCategoryAttributesService {

  constructor(private http: Http,
              private authService: AuthService) {}

  getCategoryAttributes(categoryNumber: number): Observable<Response> {
    // const body = JSON.stringify(mocks.allegroCategoryParameters);
    // const opts = { type:ResponseType.Default, status:200, body: body };
    // const responseOpts = new ResponseOptions(opts);
    // return Observable.of( new Response( responseOpts) );

    return this.http
      .get(`${environment.API_URL}/${environment.ALLEGRO_URL.getCategoryParameters}/${categoryNumber}`,
        {headers: new Headers( {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAuthToken()} )
        });
  }

  toFormGroup(attributes: Attribute[] ): FormGroup {
    let group: any = {};

    attributes.forEach( attribute => {
      if ( attribute.formType === 'CHECKBOX' ) {
        let subGroup: any = {};
        for ( const val of attribute.possibleValues ) {
          subGroup[val.id] = new FormControl();
        }
        group[attribute.id] = new FormGroup(subGroup);
      } else {
        group[attribute.id] = new FormControl();

        if (attribute.formType === 'COMBOBOX') {
          group[attribute.id].setValue('0');
        }
      }
    });

    return new FormGroup(group);
  }

  public updateAuthToken(token: string) {
    this.authService.setAuthToken(token);
  }

}
