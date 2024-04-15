import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setItems(key: string, value: any) {
    localStorage.setItem(key, btoa(JSON.stringify(value)));
  }

  getItems(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(atob(value)) : value;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clearAllItems() {
    localStorage.clear();
  }
}
