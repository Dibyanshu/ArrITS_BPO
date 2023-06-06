import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent {
  ticketCountArr: any[] = [
    {dayCount: "Leave Requests", ticketCount: 2, status: 'new'},
    {dayCount: "Travel Requests", ticketCount: 4, status: 'new'},
    {dayCount: "Expense Requests", ticketCount: 8, status: 'new'},
    {dayCount: "Others", ticketCount: 20, status: 'new'},
    {dayCount: "Pending Training", ticketCount: 5, status: 'incomplete'},
    {dayCount: "Total Mandatory Trainings", ticketCount: "2/5", status: 'complete'},
    {dayCount: "Top 3 Trainings", ticketCount: 1, status: 'complete'},
    {dayCount: "Current Training", ticketCount: 2, status: 'complete'}
  ];
  ticketChangeStatus: any[] = [
    {ticketNumber: 35467, ticketDate: '12/04/2023', type: 'New Ticket', btnColor: '#dc3545'},
    {ticketNumber: 7564, ticketDate: '23/04/2023', type: 'New Ticket', btnColor: '#dc3545'},
    {ticketNumber: 756, ticketDate: '27/04/2023', type: 'New Ticket', btnColor: '#dc3545'},
    {ticketNumber: 682, ticketDate: '26/12/2022', type: 'Spare Request', btnColor: '#ffc107'},
    {ticketNumber: 64896, ticketDate: '11/01/2023', type: 'Request Technician', btnColor: '#0dcaf0'},
    {ticketNumber: 5452, ticketDate: '17/02/2023', type: 'Request Technician', btnColor: '#0dcaf0'}
  ];
}
