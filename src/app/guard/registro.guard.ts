import { CanActivateFn } from '@angular/router';

export const registroGuard: CanActivateFn = (route, state) => {
  return true;
};
