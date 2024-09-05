import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../auth";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService)

  return next(req);
};
