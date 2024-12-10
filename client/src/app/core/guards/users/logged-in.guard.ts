import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../service/users/login/login.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const logService = inject(LoginService);
  const router = inject(Router);

  const token = logService.getToken();

  if (token) {
    console.log('canEmployeeLogged activated: Token exists:', token);
    return true;
  } else {
    console.log('canEmployeeLogged activated: Token does not exist');
    router.navigate(['/']);
    return false;
  }
};
