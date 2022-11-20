import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-stock-portfolio',
  templateUrl: './cost-stock-portfolio.component.html',
  styleUrls: ['./cost-stock-portfolio.component.scss'],
})
export class CostStockPortfolioComponent {
  mock = [
    { name: 'sdghsdf', cost: 232 },
    { name: 'fdfg', cost: 2345 },
    { name: 'jdfgj', cost: 3413 },
  ];
  constructor() {}
}
