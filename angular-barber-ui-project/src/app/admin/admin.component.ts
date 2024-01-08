import { Component } from '@angular/core';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, FooterComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
