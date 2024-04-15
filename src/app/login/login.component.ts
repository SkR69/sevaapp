import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { GolbalService } from '../services/golbal.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

const loginCompImport = [
  MatCardModule, FormsModule, MatFormFieldModule,
  MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule
]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [loginCompImport],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup | any;
  message: string = '';

  constructor(public globalService: GolbalService, public authService: AuthService,
    public formBuilder: FormBuilder, public loginService: LoginService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.initLoginForm()
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.globalService.showLoader();
    this.authService.setLoginDetails(this.loginForm.value);
    this.router.navigate(['./home']);
    this.globalService.hideLoader();
    /*     this.loginService.login(this.loginForm.value).subscribe((res: any) => {
          this.authService.setLoginDetails(res);
          this.message = '';
          this.globalService.hideLoader();
          this.router.navigate(['./home']);
        }, (error) => {
          this.globalService.hideLoader();
          this.message = "Invalid Username or Password";
        }); */

    this.loginService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.authService.setLoginDetails(res);
        this.message = '';
        this.globalService.hideLoader();
        this.router.navigate(['./home']);
      },
      error: (e) => {
        this.globalService.hideLoader();
        this.message = "Invalid Username or Password";
      },
      complete() {
        console.log("is completed");
      },
    });
  }

}
