import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account.routing';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    AccountRoutingModule,
    CommonModule
  ]
})
export class AccountModule {}
