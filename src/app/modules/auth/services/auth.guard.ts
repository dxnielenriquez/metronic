import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError, map, of } from 'rxjs';

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
