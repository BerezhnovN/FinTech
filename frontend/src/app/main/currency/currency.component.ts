import { DestroyService } from './../../services/destroy.service';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CurrencyService, DestroyService],
})
export class CurrencyComponent implements OnInit {
  usd = new Subject<string>();
  constructor(public currencySrv: CurrencyService, private readonly destroy$: DestroyService) {}

  ngOnInit() {
    this.currencySrv.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.usd.next(res["USD_RUB"].last_trade);
      });
  }
}
