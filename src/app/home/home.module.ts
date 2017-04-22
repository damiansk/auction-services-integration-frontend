import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [
    BrowserModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {

}
