import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AlertComponent } from './shared/alert/alert.component';

const appCompImport = [
  RouterOutlet,
  LoginComponent,
  LoaderComponent,
  AlertComponent
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [appCompImport],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sevaapp';
}
