import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminloginService } from '../../service/admin/adminlogin.service';

export const adminloggedOutGuard: CanActivateFn = (route, state) => {
  const adminService = inject(AdminloginService);
  const router = inject(Router);
  const token = adminService.getTokens();

  console.log('adminloggedOutGuard: Token:', token);

  if (token) {
    console.log('Token exists, redirecting to /admin/dashboard');
  
    if (router.url !== '/admin') {
      console.log('Redirecting to admin portal');
      router.navigate(['/admin/dashboard']);
    }
    return false;

  } else {
    console.log('Token does not exist, allowing access to /admin/login');
    return true;
  }
};
