import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SwalComponent, SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {SweetAlertOptions} from "sweetalert2";
import {MatButton} from "@angular/material/button";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";

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



  title : string;
  message : string;
  btnOk : string;
  btnCancel : string | undefined | null;
  icon : string | undefined | null;

  constructor(
    private modalService: NgbModal,
    private _dialogRef: MatDialogRef<ModalAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = (data.title)? data.title : "¡Atención!";
    this.message = (data.message)? data.message : "Mensaje";
    this.btnOk = (data.btnOk)? data.btnOk : "Aceptar";
    this.btnCancel = (data.btnCancel)? data.btnCancel : "Cancelar";
    this.icon = (data.icon)? data.icon : "fa-check";
  }

  closeDialog(value : boolean){
    this._dialogRef.close(value);
  }


}
