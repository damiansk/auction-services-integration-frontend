import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account.routing';

import { AccountComponent } from './account.component';
import { PasswordManagementComponent } from './password-management/password-management.component';

import { ServicesConnectionsModule } from './services-connections/services-connections.module';

@NgModule({
  declarations: [
    AccountComponent,
    PasswordManagementComponent
  ],
  imports: [
    ServicesConnectionsModule,
    AccountRoutingModule,
    CommonModule
  ]
})
export class AccountModule {}
