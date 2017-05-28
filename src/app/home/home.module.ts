import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact/contact.component';

import { HomeRoutingModule } from './home.routing';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule
  ]
})
export class HomeModule {

}
