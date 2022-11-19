import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`/api/auth/token/login`, {
      email,
      password,
    });
  }

  registration(body: RegistrationBody) {
    return this.http.post(`api/users`, body);
  }
}
