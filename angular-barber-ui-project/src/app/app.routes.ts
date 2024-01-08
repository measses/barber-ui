import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'admin', component:AdminComponent
  }
];
