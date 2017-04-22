import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { EbayConnectionComponent} from './ebay/ebay-connection.component';
import { EbayAuthAcceptedComponent} from './ebay/auth/accepted/ebay-auth-accepted.component';
import { EbayAuthDeclinedComponent } from './ebay/auth/declined/ebay-auth-declined.component';

import { HomeRoutingModule } from './home.routing';


@NgModule({
  declarations: [
    HomeComponent,
    EbayConnectionComponent,
    EbayAuthAcceptedComponent,
    EbayAuthDeclinedComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule
  ]
})
export class HomeModule {

}
