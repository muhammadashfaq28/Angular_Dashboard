import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { PatientRegistration } from './dashboard/patient-registration/patient-registration';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./dashboard/dashboard').then(c => c.Dashboard),
    children: [
      {
        path: 'patient-registration',
        loadComponent: () =>
          import('./dashboard/patient-registration/patient-registration').then(c => c.PatientRegistration)
      },
      {
        path: 'week3',
        loadComponent: ()=>
          import('./dashboard/week_3/week3').then(m => m.week3)
      },
      {
        path: 'week2',
        loadComponent: () =>
          import('./dashboard/week_2/week2').then(m => m.Week2)
      }
      // { path: '', redirectTo: 'patient-registration', pathMatch: 'full' }
    ]
  }


];

