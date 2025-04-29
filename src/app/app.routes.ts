import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { DashboardComponent } from './shared/pages/dashboard/dashboard.component';
import { DashboardHomeComponentComponent } from './shared/pages/dashboard-home-component/dashboard-home-component.component';

export const routes: Routes = [
      {
        path:"",
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuardGuard], 
        children: [
          {
            path: '',
            component: DashboardHomeComponentComponent, // Página principal del dashboard
          }]
      }
];
