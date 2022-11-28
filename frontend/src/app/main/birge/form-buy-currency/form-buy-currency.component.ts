import { Component } from '@angular/core';

@Component({
  selector: 'app-form-buy-currency',
  templateUrl: './form-buy-currency.component.html',
  styleUrls: ['./form-buy-currency.component.scss'],
})
export class FormBuyCurrencyComponent {
  currency = 'Доллар США';
  currencyPrice = 60.45;
  currentPrice = 0;
  currencyBirge = 10000;
  currencyUser = 0;
}
