import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GolbalService } from '../../services/golbal.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, FormsModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, MatSelectModule, MatDatepickerModule,  MatButtonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {

  dataSource:any = [];
  displayedColumns: string[] = ['recepitNo', 'date','bookingNo', 'karthaName', 'amount', 'mode', 'createdBy'];
  reportForm!:FormGroup

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(public globalService: GolbalService, public formBuilder: FormBuilder, public reportService: ReportService) {
    this.initialiseForm();
  }

  initialiseForm(){
    this.reportForm = this.formBuilder.group({
      reportType: ['recepitReport',[Validators.required]],
      fromDate: ['',[Validators.required]],
      toDate: ['',[Validators.required]]
    });
  }

 /*  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } */

  reportTypeChange(){
    if(this.reportForm.get('reportType')?.value === 'recepitReport'){
      this.displayedColumns =  ['recepitNo', 'date','bookingNo', 'karthaName', 'amount', 'mode', 'createdBy'];
    } else {
      this.displayedColumns = ['bookingNo', 'date', 'karthaName', 'bookingDate', 'status', 'sevaStatus'];
    }
    this.table.renderRows();
  }

  getReportList(){
    console.log(this.reportForm?.value);
    this.globalService.showLoader();
    this.reportService.getReportList(this.reportForm?.value).subscribe({
      next: (res: any) => {
        this.dataSource = res;
        this.globalService.hideLoader();
      },
      error: (e) => {
        this.globalService.hideLoader();
        this.globalService.addAlert("danger", "Servers are unreachable. Try again later.");
      },
      complete() {
        console.log("is completed");
      },
    })
  }

  print(){
    console.log(this.reportForm?.value);
    this.globalService.showLoader();
    this.reportService.printReport(this.reportForm?.value).subscribe({
      next: (res: any) => {
        this.dataSource = res;
        this.globalService.hideLoader();
      },
      error: (e) => {
        this.globalService.hideLoader();
        this.globalService.addAlert("danger", "Servers are unreachable. Try again later.");
      },
      complete() {
        console.log("is completed");
      },
    })
  }

}
