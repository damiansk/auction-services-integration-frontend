import { Component, Input } from '@angular/core';
import { Offer } from './offer.interface';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../_services/auth.service';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {

  @Input('offer')
  offer: Offer;

  constructor(private http: Http,
              private authService: AuthService){}

  getDate(date: string): string {
    const decodeDate: Date = new Date(date);

    const day = decodeDate.getDay() + 1;
    const month = decodeDate.getMonth() + 1;
    const year = decodeDate.getFullYear();

    return `${day}/${month < 10 ? '0'+month : month}/${year}`;
  }

  openInNewTab(): void {
    const win = window.open(`http://${this.offer.url}`, '_blank');
    win.focus();
  }

  isNull(text: string): boolean{
    return text !== null;
  }

  deleteAuction(): void {
    const params = new URLSearchParams();
    params.append('offerId', this.offer.offerId);

    const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8;',
      'Authorization': this.authService.getAuthToken() });


    this.http.delete(`${environment.API_URL}${this.getDeleteUrl()}/${this.offer.offerId}`,
      { headers: headers })
      .subscribe(data => location.reload() );

  }

  private getDeleteUrl(): string {
    return this.offer.auctionService == 'EBAY' ? `${environment.EBAY_URL.deleteOffer}` :
            this.offer.auctionService == 'ALLEGRO' ? `${environment.ALLEGRO_URL.deleteOffer}` :
            '';
  }

}
