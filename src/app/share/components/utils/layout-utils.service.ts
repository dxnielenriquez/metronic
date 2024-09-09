import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActionNotificationComponent} from "../partials/action-notification/action-notification.component";
import {DeleteEntityComponent} from "../partials/delete-entity/delete-entity.component";

export enum MessageType {
  Create,
  Read,
  Update,
  Delete
}

@Injectable({
  providedIn: 'root'
})
export class LayoutUtilsService {

  constructor(
    private _snackbar: MatSnackBar,
    private _dialog: MatDialog) {
  }
  showActionNotification(
    _message: string,
    _type: MessageType = MessageType.Create,
    _duration: number = 10000,
    _showCloseButton: boolean = true,
    _verticalPosition: 'top' | 'bottom' = 'bottom'
  ) {
    const _data = {
      message: _message,
      snackBar: this._snackbar,
      showCloseButton: _showCloseButton,
      verticalPosition: _verticalPosition,
      type: _type,
      action: 'Undo'
    };
    return this._snackbar.openFromComponent(ActionNotificationComponent, {
      duration: _duration,
      data: _data,
      verticalPosition: _verticalPosition
    });
  }

  deleteElement(title: string = '', description: string = '', waitDesciption: string = '', boton = 'Eliminar') {
    return this._dialog.open(DeleteEntityComponent, {
      data: {title, description, waitDesciption, boton},
      width: '440px'
    });
  }

}

