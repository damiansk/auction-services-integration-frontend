import {Injectable, OnChanges} from '@angular/core';
import {Http, Response, Headers, ResponseOptions, ResponseType, URLSearchParams} from '@angular/http';
import {AuthService} from '../../../../_services/auth.service';
import {Observable} from 'rxjs/Observable';
import {environment, mocks} from '../../../../../environments/environment';
import {Attribute} from './attribute.interface';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable()
export class EbayCategoryAttributesService {

  constructor(private http: Http,
              private authService: AuthService) {}

  getCategoryAttributes(categoryNumber: number, marketplace: string = '0'): Observable<Response> {
    // const body = JSON.stringify(mocks.ebayCategoryAttributes);
    // const opts = { type:ResponseType.Default, status:200, body: body };
    // const responseOpts = new ResponseOptions(opts);
    // return Observable.of( new Response( responseOpts) );

    return this.http
      .get(`${environment.API_URL}${environment.EBAY_URL.getCategoryParameters}${marketplace}/${categoryNumber}`,
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

  getPaymentPolicy(marketplace: string = 'EBAY_US'): Observable<Response> {
    const params = new URLSearchParams();
    params.append('marketplace', marketplace);

    return this.http.get(`${environment.API_URL}${environment.EBAY_URL.getPaymentPolicy}`,
      { search: params,
        headers: new Headers( {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAuthToken()} )
      });
  }

  getFulfillmentPolicy(marketplace: string = 'EBAY_US'): Observable<Response> {
    const params = new URLSearchParams();
    params.append('marketplace', marketplace);

    return this.http.get(`${environment.API_URL}${environment.EBAY_URL.getFulfillmentPolicy}`,
      { search: params,
        headers: new Headers( {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAuthToken()} )
      });
  }

  getReturnPolicy(marketplace: string = 'EBAY_US'): Observable<Response> {
    const params = new URLSearchParams();
    params.append('marketplace', marketplace);

    return this.http.get(`${environment.API_URL}${environment.EBAY_URL.getReturnPolicy}`,
      { search: params,
        headers: new Headers( {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAuthToken()} )
      });
  }

  getLocation(): Observable<Response> {
    return this.http.get(`${environment.API_URL}${environment.EBAY_URL.getLocation}`,
      { headers: new Headers( {
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAuthToken()} )
      });
  }

}
