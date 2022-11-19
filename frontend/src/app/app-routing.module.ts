import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'login', component: LoginComponent, data: { title: 'Авторизация' } },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  // { path: '**', component: _ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
