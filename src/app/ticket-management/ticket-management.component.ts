import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent {
  ticketCountArr: any[] = [
    {dayCount: "Today's", ticketCount: 2, status: 'new'},
    {dayCount: "Last 15 Day's", ticketCount: 4, status: 'new'},
    {dayCount: "Last 30 Day's", ticketCount: 8, status: 'new'},
    {dayCount: "Last 90 Day's", ticketCount: 20, status: 'new'},
    {dayCount: "Today's", ticketCount: 0, status: 'complete'},
    {dayCount: "Last 15 Day's", ticketCount: 2, status: 'complete'},
    {dayCount: "Last 30 Day's", ticketCount: 4, status: 'complete'},
    {dayCount: "Last 90 Day's", ticketCount: 16, status: 'complete'}
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
