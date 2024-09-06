import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.hasAccess().pipe(
      map(() => true),
      catchError((error) => {
        if (error.status === 400) {
          return of(false);
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      })
    );
  }
}
