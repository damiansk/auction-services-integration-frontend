import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent, SignInComponent, SignUpComponent, SignUpDoneComponent } from './welcome';
import { SignUpService, SignInService } from './welcome';
import { HomeComponent } from './home';
import { AccountActivationComponent } from './account-activation/account-activation.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    SignUpDoneComponent,
    AccountActivationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full'},
          { path: 'login', component: SignInComponent },
          { path: 'register', component: SignUpComponent },
          { path: 'register/done', component: SignUpDoneComponent }
        ]
      },
      { path: 'home', component: HomeComponent },
      { path: 'account-activation', component: AccountActivationComponent }
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
