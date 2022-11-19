import { DestroyService } from './../../services/destroy.service';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CurrencyService, LatestData } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CurrencyService, DestroyService],
})
export class CurrencyComponent implements OnInit {
  usd = new Subject<string>();
  eur = new Subject<string>();
  constructor(public currencySrv: CurrencyService, private readonly destroy$: DestroyService) {}

  ngOnInit() {
    forkJoin([this.currencySrv.getData('USD'), this.currencySrv.getData('EUR')])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([usd, eur]) => {
        this.usd.next(usd.rates?.['RUB'].toFixed(2));
        this.eur.next(eur.rates?.['RUB'].toFixed(2));
      });
  }
}
