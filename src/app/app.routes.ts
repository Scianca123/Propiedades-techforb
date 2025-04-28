import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { DashboardComponent } from './shared/pages/dashboard/dashboard.component';

export const routes: Routes = [
      {
        path:"",
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuardGuard], // Aplica el guard a esta ruta
      }
];
