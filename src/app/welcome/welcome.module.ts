import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WelcomeComponent } from './welcome.component';
import { SignInComponent } from './signIn/sign-in.component';
import { SignUpComponent } from './signUp/sign-up.component';
import { SignUpDoneComponent } from './signUp/signUpComplete/sign-up-done.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';

import { SignUpService } from './signUp/sign-up.service';
import { SignInService } from './signIn/sign-in.service';

import { WelcomeRoutingModule } from './welcome.routing';

@NgModule({
  declarations: [
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    SignUpDoneComponent,
    AccountActivationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    WelcomeRoutingModule
  ],
  providers: [
    SignUpService,
    SignInService
  ]
})
export class WelcomeModule {

}
