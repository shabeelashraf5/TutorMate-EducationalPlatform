import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injector } from '@angular/core';
import { LoginService } from '../../service/users/login/login.service';

export const authUserInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);

  console.log('Url is connected', req.url);

  const token = loginService.getToken();

  console.log('Token from UserInterceptor:', token);

  if (token && req.url.includes('home')) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }
  return next(req);
};
