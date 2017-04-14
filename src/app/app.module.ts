import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent, SignInComponent, SignUpComponent, SignUpDoneComponent, AccountActivationComponent } from './welcome';
import { SignUpService, SignInService } from './welcome';
import { HomeComponent } from './home';

import { EbayConnectionComponent } from './eBay/ebay-connection.component';
import { EbayAuthAcceptedComponent } from './ebay/auth/accepted/ebay-auth-accepted.component';
import { EbayAuthDeclinedComponent } from './eBay/auth/declined/ebay-auth-declined.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    SignUpDoneComponent,
    AccountActivationComponent,
    HomeComponent,
    EbayConnectionComponent,
    EbayAuthAcceptedComponent,
    EbayAuthDeclinedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome/login', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full'},
          { path: 'login', component: SignInComponent },
          { path: 'register', component: SignUpComponent },
          { path: 'register/done', component: SignUpDoneComponent },
          { path: 'account-activation', component: AccountActivationComponent }
        ]
      },
      { path: 'home', component: HomeComponent },
      { path: 'ebay-connection', component: EbayConnectionComponent },
      { path: 'ebay-auth-accepted', component: EbayAuthAcceptedComponent },
      { path: 'ebay-auth-declined', component: EbayAuthDeclinedComponent }
    ])
  ],
  providers: [
    SignUpService,
    SignInService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
