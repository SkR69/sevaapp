import { Component } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { GolbalService } from '../../services/golbal.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [AlertModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  
  constructor(public globalService: GolbalService) {

  }

}
