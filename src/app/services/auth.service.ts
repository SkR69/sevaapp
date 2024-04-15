import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLoggedIn = false;

    constructor(private storageService: StorageService, private router: Router) {
        const token = this.storageService.getItems('token');
        if (token == null) {
            this.isLoggedIn = false;
        } else {
            this.isLoggedIn = true;
        }
    }

    setLoginDetails(res: any) {
        this.storageService.setItems("token", res.username);
        this.storageService.setItems("userDetails", res);
        this.isLoggedIn = true;
    }

    clearLoginDetails() {
        this.storageService.clearAllItems();
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
    }
}
