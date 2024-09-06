import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

const Routing: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full',},
  {path: '**', redirectTo: 'auth/login',},
];

export {Routing};
