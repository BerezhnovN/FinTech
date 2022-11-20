import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ResData {
  [key: string]: item;
}

export interface item {
  avg: string;
  buy_price: string;
  high: string;
  last_trade: string;
  low: string;
  sell_price: string;
  updated: number;
  vol: string;
  vol_curr: string;
}
@Injectable()
export class ExchangeService {
  private readonly baseUrl = 'https://api.exmo.com/v1.1/ticker';

  constructor(private http: HttpClient) {}

  getData(): Observable<ResData> {
    return this.http.post<ResData>(`${this.baseUrl}`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }
}
