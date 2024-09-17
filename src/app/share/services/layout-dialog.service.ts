import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ModalAlertComponent } from '../components/modal-alert/modal-alert.component';

@Injectable({
  providedIn: 'root'
})
export class LayoutDialogService {
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  errorElement(
    title: string = '',
    description: string = '',
    btnTextCancel: string = 'Cerrar',
    logout: boolean = false,
    reload: boolean = false
  ) {
    this.dialog.open(ModalAlertComponent, {
      data: {
        title: title,
        message: description,
        btnOk: btnTextCancel,
      },
      panelClass: 'metronic-modal',
      backdropClass: 'metronic-backdrop',
      disableClose: true, // Evitar que se cierre al hacer clic fuera del modal
    })
      .afterClosed()
      .subscribe(_ => {
        if (logout) {
          this.authService.logout();
          const currentPath = this.router.url.split('/');
          if (currentPath.length > 2) {
            this.router.navigate(['/', currentPath[1], 'login']);
          } else {
            window.location.reload();
          }
        }

        if (reload) {
          window.location.reload();
        }
      });
  }
}
