import { CanActivateFn } from '@angular/router';

export const rolGuardAd: CanActivateFn = (route, state) => {
  if (localStorage.getItem('role') == 'admin') {
    return true;
  } else
    return false;
};

export const rolGuarMe: CanActivateFn = (route, state) => {
  if (localStorage.getItem('role') == 'mesero') {
    return true;
  } else
    return false;
};

