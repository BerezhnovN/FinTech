import { Subject, takeUntil } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DestroyService } from 'src/app/services/destroy.service';
import { ExchangeService, ResData } from './exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExchangeService, DestroyService],
})
export class ExchangeComponent implements OnInit {
  usd = new Subject<string>();
  eur = new Subject<string>();
  constructor(private exchangeSrv: ExchangeService, private readonly destroy$: DestroyService) {}
  ngOnInit(): void {
    this.exchangeSrv
      .getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.usd.next(res['USD_RUB'].last_trade);
      });
  }
}
