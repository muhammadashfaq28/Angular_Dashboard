import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const Authservice = inject(Auth)
  const router = inject(Router)


  if (Authservice.isLoggedIn()){
    return true
    
  } else {
    router.navigate([''])
    return false
  }
};
