import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanchangaService {

  constructor(private _http: HttpClient) { }

  getPanchangaList(samvatsara:string, maasa: string) {
    return this._http.get(`${environment.apiUrl}/panchanga/${samvatsara}/${maasa}`);
  }
}
