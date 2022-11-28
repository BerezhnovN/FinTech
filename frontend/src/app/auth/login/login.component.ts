import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
  save: FormControl<boolean>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup<LoginForm>;

  get emailCtrl(): FormControl {
    return this.form.controls.email;
  }

  get passwordCtrl(): FormControl {
    return this.form.controls.password;
  }

  get saveCtrl(): FormControl {
    return this.form.controls.save;
  }

  constructor(private readonly authSrv: AuthService, private readonly router: Router) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      save: new FormControl(false),
    });
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }

    this.authSrv.login(this.emailCtrl.value, this.passwordCtrl.value).subscribe({
      next: () => {
        this.router.navigate(['main']);
      },
      error: err => {
        throw new Error(`Ошибка авторизации ${err}`);
      },
    });
  }
}
