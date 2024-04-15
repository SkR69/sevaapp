import { Component } from '@angular/core';
import { GolbalService } from '../../services/golbal.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  constructor(public globalService: GolbalService) {

  }

}
