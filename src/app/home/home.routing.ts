import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { EbayConnectionComponent } from './ebay/ebay-connection.component';
import { EbayAuthAcceptedComponent } from './ebay/auth/accepted/ebay-auth-accepted.component';
import { EbayAuthDeclinedComponent } from './ebay/auth/declined/ebay-auth-declined.component';

import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'ebay-connection', component: EbayConnectionComponent,
    children: [
      { path: 'auth-accepted', component: EbayAuthAcceptedComponent },
      { path: 'auth-declined', component: EbayAuthDeclinedComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
