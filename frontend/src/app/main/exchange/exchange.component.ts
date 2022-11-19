import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DestroyService } from 'src/app/services/destroy.service';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExchangeService, DestroyService],
})
export class ExchangeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
