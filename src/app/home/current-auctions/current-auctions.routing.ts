import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrentAuctionsComponent } from './current-auctions.component';

const routes: Routes = [
  { path: '', component: CurrentAuctionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentAuctionsRoutingModule {}
