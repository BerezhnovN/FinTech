import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

export interface RegistrationBody {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface IAuthToken {
  auth_token: string;
}
const SERVICE_ADDRESS = 'http://62.84.121.226';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get localTokenInfo(): { token: string | null } {
    return {
      token: localStorage.getItem('accessToken'),
    };
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<IAuthToken>(`${SERVICE_ADDRESS}/api/auth/token/login`, {
        email,
        password,
      })
      .pipe(
        tap(authToken => {
          localStorage.setItem('accessToken', authToken.auth_token);
        })
      );
  }

  registration(body: RegistrationBody) {
    return this.http.post(`${SERVICE_ADDRESS}/api/users/`, body);
  }

  isAuthorized(): Observable<boolean> {
    if (!this.localTokenInfo.token) {
      return of(false);
    } else {
      return of(true);
    }
  }

  setToken(token: string) {
    if (token) localStorage.setItem('accessToken', token);
  }

  logout() {
    localStorage.clear();
  }
}
