import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {

  const currentUser = inject(StorageService).getItems("userDetails");
    if (inject(AuthService).isLoggedIn) {
      // check if route is restricted by role
     /*  if (route.data.roles && route.data.roles.indexOf(currentUser.roleId) === -1) {
        // role not authorised so redirect to home page
        this.authService.clearLoginDetails();
        return false;
      } */

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    inject(AuthService).clearLoginDetails();
    return false;
  }
