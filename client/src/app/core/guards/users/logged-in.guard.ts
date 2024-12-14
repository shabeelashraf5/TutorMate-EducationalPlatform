import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../service/users/login/login.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const logService = inject(LoginService);
  const router = inject(Router);

  const token = logService.getToken();
  const userRole = logService.getUserRoleStorage()
  
  console.log('From User Guard', userRole)
  console.log('UserloggedInGuard: Token:', token);

  if (token) {
    console.log('User is logged in, allowing access to /users/home');
    return true;
  } else {
    console.log('User is not logged in, redirecting to /login-user');
    router.navigate(['/login-user']);
    return false;
  }
};
