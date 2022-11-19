import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, RegistrationBody } from '../auth.service';

export interface RegistrationForm {
  email: FormControl<string>;
  userName: FormControl<string>;
  name: FormControl<string>;
  surname: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup<RegistrationForm>;

  get emailCtrl(): FormControl {
    return this.form.controls.email;
  }

  get usernameCtrl(): FormControl {
    return this.form.controls.userName;
  }

  get nameCtrl(): FormControl {
    return this.form.controls.name;
  }

  get surnameCtrl(): FormControl {
    return this.form.controls.surname;
  }

  get passwordCtrl(): FormControl {
    return this.form.controls.password;
  }

  constructor(private authSrv: AuthService) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(254)]),
      userName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
      name: new FormControl(null, [Validators.required, Validators.maxLength(150)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
    });
  }

  ngOnInit(): void {}

  registration() {
    const body: RegistrationBody = {
      username: this.usernameCtrl.value,
      last_name: this.surnameCtrl.value,
      email: this.emailCtrl.value,
      password: this.passwordCtrl.value,
    };

    if (this.nameCtrl.value) body.first_name = this.nameCtrl.value;

    console.log(body);
    // this.authSrv.registration(body)
  }
}
