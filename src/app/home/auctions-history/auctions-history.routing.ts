import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuctionsHistoryComponent } from './auctions-history.component';

const routes: Routes = [
  { path: '', component: AuctionsHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionsHistoryRoutingModule {}
