import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../auth";

export const tokenInterceptor : HttpInterceptorFn = (req, next)  => {

  const authService = inject(AuthService);

  const token = authService.getToken();
  console.log('Token in Interceptor:', token);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
