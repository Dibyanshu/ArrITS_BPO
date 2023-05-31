import { Component } from '@angular/core';

@Component({
  selector: 'app-social-corner',
  templateUrl: './social-corner.component.html',
  styleUrls: ['./social-corner.component.scss']
})
export class SocialCornerComponent {
  socialObj: any[] = [
    {name: 'John Doe', days: 34, desc: 'EXL makes this transformation possible. Using our suite of digital solutions as well as our data and analytics expertise, we empower life insurers, pension providers and mutual companies with capabilities that enhance customer outcomes.', imgUrl: 'https://www.exlservice.com/sites/default/files/styles/case_studies_image/public/2023-04/Thumbnai_IG_How-the-new-Consumer-Duty.jpg?itok=Et9hra09'},
    {name: 'Paul Jonas', days: 26, desc: 'In today’s healthcare environment, clinical and non-clinical teams can spend more than one-third of their time on administrative tasks as part of the case management process. This work often requires accessing multiple systems and an excessive amount of manual tasks.', imgUrl: 'https://www.exlservice.com/sites/default/files/styles/case_studies_image/public/2023-03/Thumbnail-EXL-Digital-Healthcare-Operations.jpg?itok=Uva06HIn'},
    {name: 'Peter Parker', days: 43, desc: 'An effective utilization management program helps payers manage the cost of benefits while ensuring the most effective, efficient, and highest quality of care and outcomes for its members.', imgUrl: 'https://www.exlservice.com/sites/default/files/styles/case_studies_image/public/2023-03/Thumbnail_IG_EXL_Digital%20Healthcare%20Operations_utilization%20management.jpg?itok=enttLJIO'}
  ];
}
