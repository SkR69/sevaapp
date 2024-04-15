import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { inject } from "@angular/core";
import { catchError, of } from "rxjs";
import { GolbalService } from "./golbal.service";
import { Router } from "@angular/router";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    req.headers.append
    // Inject the current `AuthService` and use it to get an authentication token:
    const authToken = inject(StorageService).getItems("token");
    // Clone the request to add the authentication header.
    const newReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return next(newReq).pipe(
        catchError((err: any) => {
            inject(GolbalService).hideLoader();
            if (!err.ok) {
                if (err.status == 401) {
                    inject(GolbalService).addAlert("danger", "Servers are unreachable. Try again later.");
                } else if (err.status == 401) {
                    inject(GolbalService).addAlert("danger", "Session Expired");
                    inject(Router).navigate(['login']);
                    localStorage.clear();
                } else if (err.status == 500) {
                    if (err.error.message == "")
                        inject(GolbalService).addAlert("danger", "Servers are unreachable. Try again later.");
                    else
                        inject(GolbalService).addAlert('danger', err.error.message);
                }
            }
            else {
                inject(GolbalService).addAlert("danger", "Servers are unreachable. Try again later.");
            }
            return of(err);
        })
    );
}