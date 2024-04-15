import { CommonModule, KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-view-seva-details',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './view-seva-details.component.html',
  styleUrl: './view-seva-details.component.scss'
})
export class ViewSevaDetailsComponent {
  @Input() sevaBookingData!: any;
  sevaDetails:any;
  sevaKarthaDetails:any;
  receiptDetails:any;
  sevaDetailsColumns = ['seva', 'date', 'maasa', 'paksha', 'tithi', 'qty', 'amount', 'status'];
  receiptDetailsColumns = ['receiptNo', 'receiptDate', 'mode', 'amount', 'amountDue', 'generatedBy'];

  constructor(){
    console.log(this.sevaBookingData?.receiptDetails);
  }


  ngOnInit(): void {
    this.sevaDetails = this.sevaBookingData?.sevaDetails;
    console.log(this.sevaBookingData);
    console.log(this.sevaDetails);

    this.sevaKarthaDetails = this.sevaBookingData?.sevaKarthaDetails;

    this.receiptDetails = this.sevaBookingData?.receiptDetails;
    console.log(this.receiptDetails);
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

 

}
