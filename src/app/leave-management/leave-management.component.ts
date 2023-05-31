import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss']
})
export class LeaveManagementComponent {
  approvalObj: any[] = [
    {name: "Steve Rogers", startDate: '12/04/2023', type: 'Earned', duration: 2},
    {name: "Clark Kent", startDate: '21/02/2023', type: 'Sick', duration: 3},
    {name: "John Doe", startDate: '04/03/2023', type: 'Annual', duration: 5},
    {name: "Stefen Parker", startDate: '31/05/2023', type: 'Annual', duration: 7},
    {name: "Robert D'Costa", startDate: '23/04/2023', type: 'Optional', duration: 1},
    {name: "Bruce Wayne", startDate: '12/05/2023', type: 'Emergency', duration: 0.5},
    {name: "Peter Parker", startDate: '06/02/2023', type: 'Emergency', duration: 0.5}
  ];
  myLeaves: any[] = [
    {status: "Approved", startDate: '12/04/2023', type: 'Sick', duration: 2},
    {status: "Approved", startDate: '21/02/2023', type: 'Planned', duration: 3},
    {status: "Approved", startDate: '04/03/2023', type: 'Annual', duration: 5},
    {status: "Cancelled", startDate: '31/05/2023', type: 'Annual', duration: 7},
    {status: "Approved", startDate: '23/04/2023', type: 'Optional', duration: 1},
    {status: "Declined", startDate: '12/05/2023', type: 'Emergency', duration: 0.5},
    {status: "Approved", startDate: '06/02/2023', type: 'Emergency', duration: 0.5}
  ];
}
