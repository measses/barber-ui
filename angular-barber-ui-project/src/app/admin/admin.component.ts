import { Component } from '@angular/core';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './layouts/pages/login/login.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, FooterComponent, UserComponent, RouterOutlet, LoginComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
