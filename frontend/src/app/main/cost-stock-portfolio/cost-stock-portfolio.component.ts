import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-stock-portfolio',
  templateUrl: './cost-stock-portfolio.component.html',
  styleUrls: ['./cost-stock-portfolio.component.scss'],
})
export class CostStockPortfolioComponent implements OnInit {
  mock = [
    { name: 'Доллар США', cost: 232 },
    { name: 'Газпром', cost: 2345 },
    { name: 'МТС', cost: 3413 },
  ];
  allMoney = 0;
  mockGrow = 500;
  mockPercent = 0;
  constructor() {}

  ngOnInit(): void {
    this.mock.forEach(active => {
      this.allMoney += active.cost;
    });
    this.mockPercent = Math.ceil((this.mockGrow / this.allMoney) * 100);
  }
}
