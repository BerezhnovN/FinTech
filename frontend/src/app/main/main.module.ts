import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { WalletComponent } from './wallet/wallet.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { OperationHistoryComponent } from './operation-history/operation-history.component';

@NgModule({
  declarations: [MainComponent, WalletComponent, CurrencyComponent, ExchangeComponent, OperationHistoryComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
