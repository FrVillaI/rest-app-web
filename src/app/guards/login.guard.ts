import { CanActivateFn, CanMatchFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  return true;
};
export const registroGuard: CanMatchFn = (route, state) => {
  return localStorage.getItem('token') !== 'true';
};

const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route, state) => {
    const userRole = localStorage.getItem('role');
    console.log('userRole:', userRole);  
    if (!userRole) {
      return false;
    }
    return allowedRoles.includes(userRole);
  };
};

export const adminGuard: CanActivateFn = roleGuard(['admin']);
export const invitadoGuard: CanActivateFn = roleGuard(['mesero']);


