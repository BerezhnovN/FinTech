import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { HistoryComponent } from './history/history.component';
import { BirgeComponent } from './birge/birge.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainComponent,
    title: 'Главная страница',
  },
  {
    path: 'payments',
    component: PaymentsComponent,
    title: 'Главная страница',
  },
  {
    path: 'history',
    component: HistoryComponent,
    title: 'Главная страница',
  },
  {
    path: 'birge',
    component: BirgeComponent,
    title: 'Главная страница',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
