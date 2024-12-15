import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AdminloginService } from '../../service/admin/adminlogin.service';
import { Observable } from 'rxjs';

export const authAdminInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('admin')) {
    const adminService = inject(AdminloginService);

    console.log('Admin URL Connected:', req.url);

    const token = adminService.getTokens();
    console.log('Token from Admin Interceptor:', token);

    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    } else {
      console.log('Admin token not found at the moment of request.');
    }
  }
  return next(req);
};
