import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { LayoutDialogService } from '../services/layout-dialog.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const toast = inject(ToastService);
  const layoutDialog = inject(LayoutDialogService);

  if (req.headers.get('noIntercept') === 'true') {
    return next(req); // Si no se debe interceptar, pasa la solicitud al siguiente interceptor.
  }

  return next(req).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        switch (err.status) {
          case 0:
            unknownError(err, toast);
            break;
          case 401:
            unauthorized(err, authService, layoutDialog, req.responseType === 'blob');
            break;
          case 403:
            forbidden(err, layoutDialog);
            break;
          case 422:
            unprocessableEntity(err, layoutDialog, req.responseType === 'blob');
            break;
          default:
            toast.show('Error', err.message || 'Ocurrió un error');
        }
      }
      return throwError(() => null); // Retorna un error sin valor (null).
    })
  );
};

function unknownError(err: HttpErrorResponse, toast: ToastService) {
  const title = err.error?.message || 'Error de conexión';
  const msg = err.message || 'Ocurrió un error';
  toast.show(title, msg);
}

function unauthorized(
  err: HttpErrorResponse,
  authService: AuthService,
  layoutDialog: LayoutDialogService,
  isBlob: boolean
) {
  let msg = err.error?.error;
  const title = err.error?.message || 'Advertencia';

  if (msg !== 'Usuario y/o contraseña incorrectos') {
    authService.logout();
  }

  if (msg === 'Token not provided') {
    window.location.reload();
  }

  if (isBlob) {
    msg = 'Su sesión ha expirado. Por favor, inicie una nueva sesión.';
  }

  const logout = msg === 'Su sesión ha expirado. Por favor, inicie una nueva sesión.';
  layoutDialog.errorElement(title, msg, 'Aceptar', logout);
}

function forbidden(err: HttpErrorResponse, layoutDialog: LayoutDialogService) {
  const msg = err.error?.error;
  const title = err.error?.message || 'Sistemas PREP';
  layoutDialog.errorElement(title, msg);
}

function unprocessableEntity(
  err: HttpErrorResponse,
  layoutDialog: LayoutDialogService,
  isBlob: boolean
) {
  if (isBlob) {
    return;
  }
  const title = err.error?.message || 'Error';
  const errors: string[] = err.error?.errors || ['Ocurrió un error'];
  const msg = errors.join(', ') || 'Ocurrió un error';
  layoutDialog.errorElement(title, msg, undefined, false, reloadErrorResponseMap(errors));
}

function reloadErrorResponseMap(messages: string[]): boolean {
  const knownErrors = [
    'El acta ya está digitalizada.',
    'El acta ya está digitalizada.',
    'Intente digitalizar de nuevo.',
  ];

  return knownErrors.some(error => messages.includes(error));
}
