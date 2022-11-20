import { AuthService } from '../../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuth = false;

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.isAuthorized().subscribe(isAuth => {
      this.isAuth = isAuth;
    });
  }

  onLogout(): void {
    this.authSrv.logout();
  }
}
