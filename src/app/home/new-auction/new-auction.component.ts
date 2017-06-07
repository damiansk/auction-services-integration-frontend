import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NewAuctionService } from './new-auction.service';
import { Attribute, Category } from './attribute-interface';

import { AuthService } from '../../_services/auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'new-auction',
  templateUrl: './new-auction.component.html',
  styleUrls: ['./new-auction.component.scss']
})
export class NewAuctionComponent implements OnInit {

  allegroCategoryId: number;

  constructor(private newAuctionService: NewAuctionService,
              private authService: AuthService) {}

  ngOnInit() {
    // this.updateCategoryList();
  }

  updateAllegroCategoryId(event): void {
    this.allegroCategoryId = event;
  }

}
