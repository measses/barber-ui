import { Routes } from '@angular/router';
import { UserComponent } from './admin/components/user/user.component';
import { HomeComponent } from './admin/components/home/home.component';
import { HomeComponent as AdminHomeComponent} from './admin/components/home/home.component'
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/layouts/pages/login/login.component';
export const routes: Routes = [
  { path:'', component:HomeComponent, },
  {path:'admin/login', component:LoginComponent},
  {
      path:'admin',component:AdminComponent, children:[
        {path:'',component:AdminHomeComponent},
        {path:'home',component:AdminHomeComponent},
        {path:'users',component:UserComponent}
      ]
    }

];
