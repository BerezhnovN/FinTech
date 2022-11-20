import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Авторизация',
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    title: 'Регистрация',
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
