import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
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
  icon: SweetAlertIcon | undefined;

  constructor(
    private _dialogRef: MatDialogRef<ModalAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title || "¡Atención!";
    this.message = data.message || "Mensaje";
    this.btnOk = data.btnOk || "Aceptar";
    this.btnCancel = data.btnCancel || "Cancelar";
    this.icon = data.icon;

    this.showAlert();
  }

  showAlert() {
    Swal.fire({
      title: this.title,
      text: this.message,
      icon: this.icon || 'info',
      showCancelButton: !!this.btnCancel,
      confirmButtonText: this.btnOk,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
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

}
