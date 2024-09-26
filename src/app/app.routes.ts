import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/auth/login/login.component').then((m) => m.LoginComponent),
    // component : LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then((m) => DashboardComponent),
    // component : DashboardComponent,
    data: { title: 'Dashboard' }
  },
  
];
