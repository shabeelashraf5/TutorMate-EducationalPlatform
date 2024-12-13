import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminloginService } from '../../service/admin/adminlogin.service';

export const adminloggedInGuard: CanActivateFn = (route, state) => {

  const adminService = inject(AdminloginService)
  const router = inject(Router)
  const token = adminService.getTokens()

  console.log('adminloggedInGuard: Token:', token);

  if(token){

    console.log('Token exists, can access the route.');
    return true;

  }else{
    console.log('Token does not exist, redirecting to /admin/login');
    router.navigate(['/admin/login']);
    return false;
  }

};
