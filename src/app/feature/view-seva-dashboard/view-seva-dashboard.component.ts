import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ViewSevaDetailsComponent } from '../view-seva-details/view-seva-details.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-view-seva-dashboard',
  standalone: true,
  imports: [MatCardModule, ViewSevaDetailsComponent, MatButtonModule],
  templateUrl: './view-seva-dashboard.component.html',
  styleUrl: './view-seva-dashboard.component.scss'
})
export class ViewSevaDashboardComponent implements OnInit {
  sevaBookingData: any;

  constructor() { }

  ngOnInit() {
    this.getSevaDetails();
  }

  getSevaDetails() {
    this.sevaBookingData = {
      bookingNo: 'SBKG1012901',
      sevaTotal: 50.0,
      paymentStatus: 'Due',
      sevaDetails: [
        {
          seva: 'Panchamrutha Abhisheka',
          date: 'Oct 23, 2012',
          maasa: 'Ashvija',
          paksha: 'Shukla',
          tithi: 'Navami',
          qty: 1,
          amount: 50.0,
          status: 'Initial'
        }
      ],
      sevaKarthaDetails: {
        mobileNo: '988',
        title: 'Smt.',
        firstName: 'Mamatha',
        lastName: 'Govind',
        nakshatra: 'Purvashada',
        gothra: 'Srivatsa',
        landLine: '22442332',
        email: 'sgovind@yahoo.com',
        addressLine1: 'No.10, I T I Layout',
        addressLine2: '30th Main',
        addressLine3: 'J.P. Nagar 1st Phase',
        state: 'Karnataka',
        city: 'Bengaluru',
        pincode: '560078'
      },
      receiptDetails: [{
        receiptNo: '1234',
        receiptDate: '10/04/2024',
        mode: 'Online',
        amount: 1000,
        amountDue: 0,
        generatedBy: 'Srikanth'
      }]
    };
  }
}
