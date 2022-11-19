import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

export interface RegistrationBody {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  get localTokenInfo(): { token: string | null} {
    return {
      token: localStorage.getItem('accessToken'),
    };
  }


  constructor(private http: HttpClient, private router: Router) {}



  login(email: string, password: string) {
    return this.http.post(`/api/auth/token/login`, {
      email,
      password,
    });
  }

  registration(body: RegistrationBody) {
    return this.http.post(`api/users`, body);
  }

  isAuthorized(): Observable<boolean> {
    if (!this.localTokenInfo.token) {
      return of(false);
    } else {
      return of(true)
    }
  }
  
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
