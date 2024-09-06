import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Routing} from "./pages/routing";
import {LayoutComponent} from "./_metronic/layout/layout.component";
import {AuthGuard} from "./share/guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: Routing,
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
