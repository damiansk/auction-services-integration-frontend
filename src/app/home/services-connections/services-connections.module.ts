import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServicesConnectionsComponent } from './services-connections.component';

import { ServicesConnectionsRoutingModule } from './services-connections.routing';

@NgModule({
  declarations: [ServicesConnectionsComponent],
  imports: [
    BrowserModule,
    ServicesConnectionsRoutingModule
  ]
})
export class ServicesConnectionsModule {

}
