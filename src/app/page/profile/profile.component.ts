import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GolbalService } from '../../services/golbal.service';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, MatSelectModule, MatButtonModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  userForm!: FormGroup;

  constructor(public globalService:GolbalService, public formBuilder:FormBuilder, public userService:UserService){
    this.getUserDetails();
    this.initialiseForm();
  }

  initialiseForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      role: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      reEnterPassword: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  getUserDetails(){
    this.globalService.showLoader();
    this.userService.getUserDetails("id").subscribe({
      next: (res: any) => {
        this.initialiseForm()
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

  saveUser(){
    console.log(this.userForm?.value);
    /* this.globalService.showLoader();
    this.userService.saveUserDetails(this.userForm?.value).subscribe({
      next: (res: any) => {
        this.initialiseForm()
        this.globalService.hideLoader();
      },
      error: (e) => {
        this.globalService.hideLoader();
        this.globalService.addAlert("danger", "Servers are unreachable. Try again later.");
      },
      complete() {
        console.log("is completed");
      },
    }) */
  }


}
