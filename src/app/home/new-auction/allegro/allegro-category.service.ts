import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthService } from '../../../_services/auth.service';

@Injectable()
export class AllegroCategoryService {

  constructor(private http: Http,
              private authService: AuthService) {}

}
