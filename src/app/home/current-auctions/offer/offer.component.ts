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

}
