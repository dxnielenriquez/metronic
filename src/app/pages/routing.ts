import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

const Routing: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./user/pages.module').then((m) => m.PagesModule),
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full',},
  {path: '**', redirectTo: 'auth/login',},
];

export {Routing};
