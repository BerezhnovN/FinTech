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

export interface Login {
  auth_token:  string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = 'http://62.84.121.226:8000/'
  get localTokenInfo(): { token: string | null} {
    return {
      token: localStorage.getItem('accessToken'),
    };
  }

  constructor(private http: HttpClient) {}

  login(email: string, password: string)  {
    return this.http.post<Login>(`${this.baseUrl}api/auth/token/login`, {
      email,
      password,
    }).pipe(tap(res => this.setToken(res.auth_token)));
  }

  registration(body: RegistrationBody) {
    return this.http.post(`${this.baseUrl}api/users/`, body);
  }

  isAuthorized(): Observable<boolean> {
    if (!this.localTokenInfo.token) {
      return of(false);
    } else {
      return of(true)
    }
  }

  setToken(token: string) {
    if(token) localStorage.setItem('token', token)
  }

  logout() {
    localStorage.clear();
  }
}
