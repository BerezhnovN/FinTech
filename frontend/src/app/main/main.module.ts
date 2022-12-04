import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { WalletComponent } from './wallet/wallet.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { OperationHistoryComponent } from './operation-history/operation-history.component';
import { PaymentsComponent } from './payments/payments.component';
import { HistoryComponent } from './history/history.component';
import { BirgeComponent } from './birge/birge.component';
import { BrokerageAccountComponent } from './brokerage-account/brokerage-account.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { CostStockPortfolioComponent } from './cost-stock-portfolio/cost-stock-portfolio.component';
import { FormBuyCurrencyComponent } from './birge/form-buy-currency/form-buy-currency.component';
import { ChartPriceComponent } from './birge/chart-price/chart-price.component';

@NgModule({
  declarations: [
    MainComponent,
    WalletComponent,
    CurrencyComponent,
    ExchangeComponent,
    OperationHistoryComponent,
    MainComponent,
    WalletComponent,
    CurrencyComponent,
    PaymentsComponent,
    HistoryComponent,
    BirgeComponent,
    BrokerageAccountComponent,
    NewBillComponent,
    CostStockPortfolioComponent,
    FormBuyCurrencyComponent,
    ChartPriceComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
