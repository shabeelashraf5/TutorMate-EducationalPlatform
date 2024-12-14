import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../service/users/login/login.service';
import { inject } from '@angular/core';

export const loggedOutGuard: CanActivateFn = (route, state) => {
  const logService = inject(LoginService);
  const router = inject(Router);

  const token = logService.getToken();

  if (token) {
    
    console.log('User is already logged in, redirecting to /users/home');

    router.navigate(['/users/home']);
    return false;

  } else {
    console.log('User is not logged in, allowing access to /login-user');
    return true;
  }
};
