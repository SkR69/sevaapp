import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUserDetails(id:string) {
    return this._http.get(`${environment.apiUrl}/user/${id}`);
  }

  saveUserDetails(payload:any){
    return this._http.post(`${environment.apiUrl}/user/save`, payload);
  }
}
