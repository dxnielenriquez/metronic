import { Component } from '@angular/core';
import {ToastService} from "../../services/toast.service";
import {NgbToast, NgbToastHeader} from "@ng-bootstrap/ng-bootstrap";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-toast',
  standalone: true,

  templateUrl: './toast.component.html',
  imports: [
    NgbToast,
    NgbToastHeader,
    NgIf,
    NgForOf
  ],
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  constructor(
    public toastService: ToastService
  ) { }

}
