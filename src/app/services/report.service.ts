import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private _http: HttpClient) { }

  getReportList(payload:any) {
    return this._http.post(`${environment.apiUrl}/report/`, payload);
  }

  printReport(payload:any){
    return this._http.post(`${environment.apiUrl}/report/print`, payload);
  }
}
