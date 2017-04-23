import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CookieService } from 'ng2-cookies';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { WelcomeModule } from './welcome';

import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    WelcomeModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CookieService,
    AuthGuard,
    AuthService
  ]
})
export class AppModule { }
