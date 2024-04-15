import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './page/home/home.component';
import { SevaComponent } from './page/seva/seva.component';
import { SearchSevaComponent } from './page/search-seva/search-seva.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SevaBookingComponent } from './page/seva-booking/seva-booking.component';
import { PanchangaComponent } from './page/panchanga/panchanga.component';
import { authGuard } from './guard/auth-guard.guard';
import { ReportComponent } from './page/report/report.component';

export const routes: Routes = [{
    path: "",
    redirectTo: "login",
    pathMatch: "full"
}, {
    path: "login",
    component: LoginComponent
}, {
    path: "home",
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
        {
            path: '',
            component: SevaComponent
        }, {
            path: 'search',
            component: SearchSevaComponent
        }, {
            path: 'panchanga',
            component: PanchangaComponent
        }, {
            path: 'profile',
            component: ProfileComponent
        }, {
            path: 'seva',
            component: SevaBookingComponent
        },{
            path: 'reports',
            component:ReportComponent
        }
    ]
}];
