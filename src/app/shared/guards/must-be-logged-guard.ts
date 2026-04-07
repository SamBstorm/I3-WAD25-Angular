import { CanActivateFn, Router } from '@angular/router';
import { LoginStorage } from '../services/login-storage';
import { inject } from '@angular/core';
import { ILogin } from '../models/ilogin';

export const mustBeLoggedGuard: CanActivateFn = (route, state) => {
  const loginStorage : LoginStorage = inject(LoginStorage);
  let login : ILogin | null = loginStorage.getLogin();
  if(login) return true;
  // Si juste false, alors pas de redirection
  // return false;
  // Si une route, alors redirection
  const router : Router = inject(Router);
  return router.parseUrl('/exos/loginForm');
};
