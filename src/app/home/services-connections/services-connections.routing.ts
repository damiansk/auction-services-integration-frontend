import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesConnectionsComponent } from './services-connections.component';


const routes: Routes = [
  { path: 'services-connections', component: ServicesConnectionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesConnectionsRoutingModule {}
