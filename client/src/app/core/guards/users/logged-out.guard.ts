import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../service/users/login/login.service';
import { inject } from '@angular/core';

export const loggedOutGuard: CanActivateFn = (route, state) => {
  
  const logService = inject(LoginService)
  const router = inject(Router)

  const token = logService.getToken()

  if(token){

    router.navigate(['/home'])
    return false

  }else {

    return true
  }


};
