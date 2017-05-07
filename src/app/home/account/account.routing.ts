import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PasswordManagementComponent } from './password-management/password-management.component';

const routes: Routes = [
  //TODO Add not fount page
  { path: '', redirectTo: 'services-connections' },
  { path: 'password-management', component: PasswordManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
