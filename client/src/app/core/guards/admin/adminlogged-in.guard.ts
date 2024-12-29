import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminloginService } from '../../service/admin/adminlogin.service';

export const adminloggedInGuard: CanActivateFn = (route, state) => {
  const adminService = inject(AdminloginService);
  const router = inject(Router);
  const token = adminService.getTokens();
  const userRole = adminService.getRoleStorage();

  console.log('From Admin Guard', userRole);

  console.log('adminloggedInGuard: Token:', token);

  if (token) {
    console.log('Admin is logged in, allowing access to admin route.');
    return true;
  } else {
    console.log('Admin is not logged in, redirecting to /admin-login');
    router.navigate(['/admin-login']);

    return false;
  }
};
