import {Injectable} from '@angular/core';

export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
  classname?: string;
  success?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: ToastInfo[] = [];

  show(header: string, body: string, options?: { delay?: number, classname?: string, success?: boolean }) {
    const toast: ToastInfo = {header, body, ...(options || {})};
    this.toasts.push(toast);
  }

  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t != toast);
  }

}
