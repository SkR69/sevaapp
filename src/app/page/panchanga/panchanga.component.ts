import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GolbalService } from '../../services/golbal.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PanchangaService } from '../../services/panchanga.service';

@Component({
  selector: 'app-panchanga',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, FormsModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, MatSelectModule],
  templateUrl: './panchanga.component.html',
  styleUrl: './panchanga.component.scss'
})
export class PanchangaComponent {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['date', 'day', 'paksha', 'tithi'];
  maasa!:string;
  samvatsara!:string;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public globalService: GolbalService, public panchangaService: PanchangaService) {
    this.dataSource = new MatTableDataSource(this.getPanchangaList());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   getPanchangaList() {
    console.log(this.samvatsara);
    console.log(this.maasa);
    return [
      { date: 'Oct 16, 2012', day: 'Tuesday', paksha: 'Shukla', tithi: 'Prathama' },
      // Add more data objects
    ];
    /* this.globalService.showLoader();
    this.panchangaService.getPanchangaList(this.samvatsara, this.maasa).subscribe({
      next: (res: any) => {
        this.globalService.addAlert("success", "Seva saved successfully");
        
      },
      error: (e) => {
        this.globalService.hideLoader();
        this.globalService.addAlert("danger", "Servers are unreachable. Try again later.");
      },
      complete() {
        console.log("is completed");
      },
    }); */
  }
}
