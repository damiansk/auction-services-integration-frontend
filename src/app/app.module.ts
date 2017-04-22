import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { EbayConnectionComponent } from './eBay/ebay-connection.component';
import { EbayAuthAcceptedComponent } from './ebay/auth/accepted/ebay-auth-accepted.component';
import { EbayAuthDeclinedComponent } from './eBay/auth/declined/ebay-auth-declined.component';

import { HomeModule } from './home/home.module';
import { WelcomeModule } from './welcome';


@NgModule({
  declarations: [
    AppComponent,
    EbayConnectionComponent,
    EbayAuthAcceptedComponent,
    EbayAuthDeclinedComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    WelcomeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'ebay-connection', component: EbayConnectionComponent },
      { path: 'ebay-auth-accepted', component: EbayAuthAcceptedComponent },
      { path: 'ebay-auth-declined', component: EbayAuthDeclinedComponent }
    ])
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
