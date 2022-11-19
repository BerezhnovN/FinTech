import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DestroyService } from 'src/app/services/destroy.service';

@Component({
  selector: 'app-operation-history',
  templateUrl: './operation-history.component.html',
  styleUrls: ['./operation-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DestroyService],
})
export class OperationHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
