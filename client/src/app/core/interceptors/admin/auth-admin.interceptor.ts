import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AdminloginService } from '../../service/admin/adminlogin.service';

export const authAdminInterceptor: HttpInterceptorFn = (req, next) => {
  const adminService = inject(AdminloginService);

  console.log('Admin URL Connected:', req.url);

  const token = adminService.getToken();

  console.log('Token from Admin Interceptor:', token);

  if (token && req.url.includes('admin')) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }
  return next(req);
};
