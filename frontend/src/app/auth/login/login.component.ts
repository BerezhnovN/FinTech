import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      save: new FormControl(false),
    });
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.emailCtrl.value, this.passwordCtrl.value, this.saveCtrl.value);
  }
}
