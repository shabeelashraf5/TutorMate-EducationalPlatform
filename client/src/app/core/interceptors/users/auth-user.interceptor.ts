import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable, Injector } from '@angular/core';
import { LoginService } from '../../service/users/login/login.service';
import { AdminloginService } from '../../service/admin/adminlogin.service';
import { Observable } from 'rxjs';


export const authUserInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('users') ) { 
    const loginService = inject(LoginService);

    console.log('User URL Connected:', req.url);

    const token = loginService.getToken();
    console.log('Token from User Interceptor:', token);

    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }, 
      });
    }
  }
  return next(req);
};




