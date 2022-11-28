import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { Subject } from 'rxjs';
import { ValuteService } from '../services/valute.service';

@Component({
  selector: 'app-birge',
  templateUrl: './birge.component.html',
  styleUrls: ['./birge.component.scss'],
})
export class BirgeComponent implements OnInit {
  valuteDataSubject$ = new Subject<ChartData>();
  valuteData$ = this.valuteDataSubject$.asObservable();

  constructor(private readonly _valuteService: ValuteService) {}

  ngOnInit(): void {
    this._valuteService.getValuteData().subscribe(valuteData => {
      const labels: string[] = [];
      const dataForDataset: number[] = [];
      for (let key in valuteData.Valute) {
        labels.push(key);
        dataForDataset.push(valuteData.Valute[key].Value);
      }
      this.valuteDataSubject$.next({
        labels: labels,
        datasets: [
          {
            label: 'Стоимость валюты в рублях',
            data: dataForDataset,
          },
        ],
      });
    });
  }
}
