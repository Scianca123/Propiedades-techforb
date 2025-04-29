import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inyecta el servicio de autenticación
  const router = inject(Router); // Inyecta el servicio de enrutamiento

  if (authService.isAuthenticated()) {
    return true; // Permite el acceso si el usuario está autenticado
  } else {
    router.navigate(['/']); // Redirige al home si no está autenticado
    return false;
  }
};
