import { Injectable } from '@angular/core';
import { Headers, Http, Response, ResponseOptions, ResponseType, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import {Attribute} from './attribute-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { environment, mocks } from '../../../environments/environment';
import { AuthService } from '../../_services/auth.service';

@Injectable()
export class NewAuctionService {

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

  getCategoryRootId(marketplace: string = 'EBAY_US'): Observable<Response> {
    return this.http.get(`${environment.API_URL}${environment.EBAY_URL.getCategoryRootId}${marketplace}`,
      {headers: new Headers( {
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAuthToken()} )
      });
  }

  getCategoryTreeRoot(treeId: string): Observable<Response> {
    return this.http.get(`${environment.API_URL}${environment.EBAY_URL.getCategoryTreeRoot}${treeId}/0`,
      {headers: new Headers( {
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAuthToken()} )
      });
  }

  getCategory(categoryRootId: string, categoryId: string): Observable<Response> {
    return this.http.get(`${environment.API_URL}${environment.EBAY_URL.TEST}${categoryRootId}/${categoryId}`,
      {headers: new Headers( {
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAuthToken()} )
      });
  }

  getCategoryParameters(): Observable<Response> {
    const body = JSON.stringify(mocks.ebayCategoryAttributes);
    const opts = { type:ResponseType.Default, status:200, body: body };
    const responseOpts = new ResponseOptions(opts);
    return Observable.of( new Response( responseOpts) );

    // return this.http.get(`${environment.API_URL}${environment.EBAY_URL.getCategoryParameters}`,
    //   {headers: new Headers( {
    //     'Content-Type': 'application/json',
    //     'Authorization': this.authService.getAuthToken()} )
    //   });
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
    params.append('marketPlace', marketplace);

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

}
