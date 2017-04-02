import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../../environments/environment';

import { User } from './sign-up.interface';

@Injectable()
export class SignUpService {

  constructor( private http: Http ) {}

  register(user: User): void {
    this.http.post(`${environment.API_URL}/api/v1/user/register`, user)
      .subscribe(
        ( data ) => { console.log( `Data: ${data}`) },
        ( error ) => { console.log( `Error: ${error}` ) },
        () => { console.log( 'Complete' ) }
      );
  }

}
