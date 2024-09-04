import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {

  let baseUrl = environment.api.baseUrl;

  if(req.url == 'login')
    baseUrl = environment.api.baseUrl.replace('/web','');
  console.log(baseUrl)

  if (req.url.startsWith('http',0) || req.url.startsWith('https',0) ) {
    return next(req);
  }

  req = req.clone({
    url: `${baseUrl}/${req.url}`
  });

  return next(req);
}

