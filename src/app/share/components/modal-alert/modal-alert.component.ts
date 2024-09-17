import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrl: './modal-alert.component.scss',
  imports: [
    MatButton,
    NgIf
  ],

  standalone: true
})
export class ModalAlertComponent {
  title: string;
  message: string;
  btnOk: string;
  btnCancel: string | undefined | null;
  icon: SweetAlertIcon | undefined; // Ajusta el tipo de icono

  constructor(
    private _dialogRef: MatDialogRef<ModalAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title || "¡Atención!";
    this.message = data.message || "Mensaje";
    this.btnOk = data.btnOk || "Aceptar";
    this.btnCancel = data.btnCancel || "Cancelar";
    this.icon = data.icon; // Puede ser `undefined` o un valor válido

    this.showAlert();
  }

  showAlert() {
    Swal.fire({
      title: this.title,
      text: this.message,
      icon: this.icon || 'info', // Proporciona un valor predeterminado
      showCancelButton: !!this.btnCancel,
      confirmButtonText: this.btnOk,
      cancelButtonText: this.btnCancel || undefined,
      customClass: {
        container: 'swal-container'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this._dialogRef.close(true);
      } else if (result.isDismissed) {
        this._dialogRef.close(false);
      }
    });
  }

  closeDialog(result: boolean) {
    this._dialogRef.close(result);
  }
}
