import { takeUntil } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DestroyService } from 'src/app/services/destroy.service';
import { WalletsData, WalletService } from './wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WalletService, DestroyService],
})
export class WalletComponent implements OnInit {
  data: WalletsData[];
  constructor(public walletSrv: WalletService, private readonly destroy$: DestroyService) {}

  ngOnInit(): void {
    this.walletSrv
      .getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => (this.data = res));
  }
}
