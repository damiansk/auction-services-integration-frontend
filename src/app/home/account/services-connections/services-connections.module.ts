import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesConnectionsComponent } from './services-connections.component';

import { ServicesConnectionsRoutingModule } from './services-connections.routing';
import { EbayAuthComponent } from './ebay-auth/ebay-auth.component';
import { AllegroAuthComponent } from './allegro-auth/allegro-auth.component';

@NgModule({
  declarations: [
    ServicesConnectionsComponent,
    EbayAuthComponent,
    AllegroAuthComponent
  ],
  imports: [
    ServicesConnectionsRoutingModule,
    CommonModule
  ]
})
export class ServicesConnectionsModule {

}