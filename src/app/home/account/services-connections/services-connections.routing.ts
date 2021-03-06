import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesConnectionsComponent } from './services-connections.component';


const routes: Routes = [
  { path: 'services-connections',
    children: [
      { path: '', component: ServicesConnectionsComponent },
      { path: ':service/:options', component: ServicesConnectionsComponent },
      { path: ':service', component: ServicesConnectionsComponent },
      { path: '**', redirectTo: '' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesConnectionsRoutingModule {}
