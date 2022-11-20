import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authSrv: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    });
    return next.handle(newReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.authSrv.logout();
          this.router.navigateByUrl('/auth/login');
        }
        return throwError(() => err);
      })
    );
  }
}
