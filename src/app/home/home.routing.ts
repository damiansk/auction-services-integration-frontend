import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'account', loadChildren: './account/account.module#AccountModule'},
      { path: 'auctions-history', loadChildren: './auctions-history/auctions-history.module#AuctionsHistoryModule'},
      { path: 'new-auction', loadChildren: './new-auction/new-auction.module#NewAuctionModule'},
      { path: 'current-auctions', loadChildren: './current-auctions/current-auctions.module#CurrentAuctionsModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
