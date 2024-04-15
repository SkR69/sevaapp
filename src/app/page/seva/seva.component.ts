import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-seva',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatCardModule, MatTooltipModule],
  templateUrl: './seva.component.html',
  styleUrl: './seva.component.scss'
})
export class SevaComponent {
  displayedColumns: string[] = ['bkgNo', 'sevaKartha', 'gothra', 'nakshathra', 'seva', 'bkgStatus', 'lstatus', 'action']

  dataSource = [
    { bkgNo: 1, sevaKartha: 'Govind', gothra: 'Angirasa', nakshathra: 'Jesta', seva: 'Panchamrutha', bkgStatus: 'Booked', lstatus: "Initial" },
    { bkgNo: 2, sevaKartha: 'Srikanth', gothra: 'Angirasa', nakshathra: 'Jesta', seva: 'Panchamrutha', bkgStatus: 'Booked', lstatus: "Initial" },
    { bkgNo: 3, sevaKartha: 'Karthik', gothra: 'Angirasa', nakshathra: 'Punarvasu', seva: 'Panchamrutha', bkgStatus: 'Booked', lstatus: "Initial" },
    { bkgNo: 4, sevaKartha: 'Sneha', gothra: 'Angirasa', nakshathra: 'Dhanista', seva: 'Panchamrutha', bkgStatus: 'Booked', lstatus: "Initial" },
    { bkgNo: 5, sevaKartha: 'Ramesh', gothra: 'Angirasa', nakshathra: 'Ashtha', seva: 'Panchamrutha', bkgStatus: 'Booked', lstatus: "Initial" },
    { bkgNo: 6, sevaKartha: 'Lohith', gothra: 'Angirasa', nakshathra: 'Punarvasu', seva: 'Panchamrutha', bkgStatus: 'Booked', lstatus: "Initial" }
  ];
}
