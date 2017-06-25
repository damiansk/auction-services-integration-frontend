import { Component, Input } from '@angular/core';
import { Offer } from './offer.interface';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {

  @Input('offer')
  offer: Offer;

  getDate(date: string): string {
    const decodeDate: Date = new Date(date);
    let returnDate = "";
    const day = decodeDate.getDay() + 1;
    const month = decodeDate.getMonth() + 1;
    const year = decodeDate.getFullYear();

    return `${day}/${month < 10 ? '0'+month : month}/${year}`;
  }

}
