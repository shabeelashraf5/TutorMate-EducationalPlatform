import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AdminloginService } from '../../service/admin/adminlogin.service';

// export const authAdminInterceptor: HttpInterceptorFn = (req, next) => {
//   const adminService = inject(AdminloginService);

//   console.log('Admin URL Connected:', req.url);

//   const token = adminService.getTokens();

//   console.log('Token from Admin Interceptor:', token);

//   if (token && req.url.includes('/api/admin/')) {
//     req = req.clone({
//       setHeaders: { Authorization: `Bearer ${token}` },
//     });
//   }
//   return next(req);
// };

export const authAdminInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('admin')) { // Run only for /api/admin/
    const adminService = inject(AdminloginService);

    console.log('Admin URL Connected:', req.url);

    const token = adminService.getTokens();
    console.log('Token from Admin Interceptor:', token);

    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }, // Fixed syntax for template literal
      });
    } else {
      
      console.log('Admin token not found at the moment of request.');
    }
  }
  return next(req);
};