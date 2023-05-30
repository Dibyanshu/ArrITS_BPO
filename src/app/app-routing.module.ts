import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeUserComponent } from './home-user/home-user.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { HomeCxoComponent } from './home-cxo/home-cxo.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-user', pathMatch: 'full' },
  {path: 'home-user', component: HomeUserComponent },
  { path: 'home-manager', component: HomeManagerComponent },
  { path: 'home-cxo', component: HomeCxoComponent },
  { path: 'ticket-management', component: TicketManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
