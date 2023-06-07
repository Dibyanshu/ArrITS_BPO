import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeUserComponent } from './home-user/home-user.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { HomeCxoComponent } from './home-cxo/home-cxo.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { ApprovalManagementComponent } from './approval-management/approval-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-user', pathMatch: 'full' },
  { path: 'home-user', component: HomeUserComponent },
  { path: 'manager-dashboard', component: HomeManagerComponent },
  { path: 'cxo-dashboard', component: HomeCxoComponent },
  { path: 'ticket-management', component: TicketManagementComponent },
  { path: 'leave-management', component: LeaveManagementComponent },
  { path: 'approval-management', component: ApprovalManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
