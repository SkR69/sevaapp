import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SevaDetails } from '../modal/seva';

@Injectable({
  providedIn: 'root'
})
export class SevaService {

  constructor(private _http: HttpClient) { }

  sevaBooking(payload: SevaDetails) {
    return this._http.post(`${environment.apiUrl}/seva`, payload);
  }
}
