import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuth = false;

  constructor(private authSrv: AuthService) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  onLogout(): void {
    this.authSrv.logout();
  }
}
