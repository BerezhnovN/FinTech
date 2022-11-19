import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { WalletComponent } from './wallet/wallet.component';
import { CurrencyComponent } from './currency/currency.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MainComponent, WalletComponent, CurrencyComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
