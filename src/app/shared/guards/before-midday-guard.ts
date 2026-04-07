import { CanActivateFn } from '@angular/router';

export const beforeMiddayGuard: CanActivateFn = (route, state) => {
  return new Date().getHours() < 12;
};
