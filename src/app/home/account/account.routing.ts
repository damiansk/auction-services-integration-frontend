import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //TODO Add not fount page
  { path: '', redirectTo: 'services-connections' },
  { path: 'services-connections', loadChildren: './services-connections/services-connections.module#ServicesConnectionsModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
