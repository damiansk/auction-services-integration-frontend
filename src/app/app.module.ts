import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { WelcomeModule } from './welcome';


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
  ]
})
export class AppModule { }
