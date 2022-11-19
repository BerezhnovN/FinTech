import { DestroyService } from './../../services/destroy.service';
import { Subject, takeUntil } from 'rxjs';
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
  res = new Subject<LatestData>();

  constructor(public currencySrv: CurrencyService, private readonly destroy$: DestroyService) {}

  ngOnInit() {
    this.currencySrv
      .getData('USD')
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.res.next(data);
        console.log(data);
      });
  }
}
