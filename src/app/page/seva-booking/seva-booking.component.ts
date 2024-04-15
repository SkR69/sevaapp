import { Component, ViewChild } from '@angular/core';

import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { GolbalService } from '../../services/golbal.service';
import { Seva } from '../../modal/seva';
import { CommonModule } from '@angular/common';
import { MhahPanchang } from 'mhah-panchang';
import { SevaService } from '../../services/seva.service';

@Component({
  selector: 'app-seva-booking',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatCardModule, MatTooltipModule, FormsModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, MatSelectModule, MatDatepickerModule, MatRadioModule, MatButtonModule, CommonModule],
  templateUrl: './seva-booking.component.html',
  styleUrl: './seva-booking.component.scss'
})
export class SevaBookingComponent {
  sevaForm!: FormGroup;
  sevaDataForm: FormGroup;
  displayedColumns: string[] = ['name', 'bookingDate', 'performDate', 'maasa', 'paksha', 'tithi', 'quantity', 'amount', 'status', 'action'];
  dataSource: Seva[] = [];
  @ViewChild(MatTable) table!: MatTable<any>;
  panchanga = new MhahPanchang();
  @ViewChild('sevalist', { static: false }) loginForm1!: NgForm;
  @ViewChild('sevaData', { static: false }) formDirective!: NgForm;
  isEditing: boolean = false;
  editingIndex: number = -1;

  constructor(private formBuilder: FormBuilder, public globalService: GolbalService,
    public sevaService: SevaService) {
    this.initialiseSevaForm();
    this.sevaDataForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      nakshatra: ['', Validators.required],
      gothra: ['', Validators.required],
      rashi: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      sevaList: this.formBuilder.array([])
    });
  }

  initialiseSevaForm() {
    this.sevaForm = this.formBuilder.group({
      name: ['', Validators.required],
      calendar: ['english', Validators.required],
      performDate: ['', Validators.required],
      maasa: [''],
      paksha: [''],
      tithi: [''],
      bookingDate: [new Date(), Validators.required],
      quantity: [1, Validators.required],
      amount: ['', Validators.required],
      status: ['Initial', Validators.required]
    });
  }

  addSeva() {
    if (this.sevaForm.valid) {
      this.setDatafortable();
      if (this.isEditing) {
        this.updateSeva();
      } else {
        (this.sevaDataForm.get('sevaList') as FormArray).push(this.sevaForm);
        this.dataSource.push(this.sevaForm.value);
      }
      this.table.renderRows();
      this.resetForm(this.sevaForm);
      this.initialiseSevaForm();
      this.isEditing = false;
      this.editingIndex = -1;
      console.log(this.sevaDataForm.value);
    }
  }
  

  updateSeva() {
    const sevaList = this.sevaDataForm.get('sevaList') as FormArray;
    this.setDatafortable();
    sevaList.at(this.editingIndex).patchValue(this.sevaForm.value);
    this.dataSource[this.editingIndex] = this.sevaForm.value;
    
  }

  resetForm(formGroup: FormGroup) {
    formGroup.reset();
    formGroup.markAsUntouched();
    formGroup.markAsPristine();
  
    Object.keys(formGroup.controls).forEach(key => {
      formGroup.get(key)?.setErrors(null);
    });
  }

  setDatafortable() {
    const { Tithi, Paksha, Masa } = this.panchanga.calendar(this.sevaForm.get('performDate')?.value, 12.971599, 77.594566);
    this.sevaForm.get('tithi')?.patchValue(Tithi.name_en_IN);
    this.sevaForm.get('paksha')?.patchValue(Paksha.name_en_IN);
    this.sevaForm.get('maasa')?.patchValue(Masa.name_en_IN);
  }

  onSubmit() {
    console.log(this.sevaDataForm.value);
    this.globalService.showLoader();
    this.sevaService.sevaBooking(this.sevaDataForm.value).subscribe({
      next: (res: any) => {
        this.sevaDataForm.reset();
        this.globalService.addAlert("success", "Seva saved successfully");
      },
      error: (e) => {
        this.globalService.hideLoader();
        this.globalService.addAlert("danger", "Servers are unreachable. Try again later.");
      },
      complete() {
        console.log("is completed");
      },
    });
  }

  /* editSeva(seva: any) {
    this.sevaForm.patchValue(seva);
  }

  deleteSeva(seva: any) {
    const sevaList = this.sevaDataForm.get('sevaList') as FormArray;
    const index = sevaList.controls.findIndex(item => item.value === seva);
    if (index !== -1) {
      sevaList.removeAt(index);
      this.dataSource = sevaList.controls.map(item => item.value);
      this.table.renderRows();
    }
    console.log(this.sevaDataForm.value)
  }
 */
  editSeva(seva: any, index: number) {
    this.sevaForm.patchValue(seva);
    this.isEditing = true;
    this.editingIndex = index;
  }

  deleteSeva(seva: any, index: number) {
    const sevaList = this.sevaDataForm.get('sevaList') as FormArray;
    sevaList.removeAt(index);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
    console.log(this.sevaDataForm.value);
  }

}
