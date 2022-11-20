import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResData } from '../exchange/exchange.service';

export interface LatestData {
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  };
  timestamp: number;
}

@Injectable()
export class CurrencyService {
  private readonly baseUrl = 'https://api.exmo.com/v1.1/ticker';

  constructor(private http: HttpClient) {}

  getData(): Observable<ResData> {
    return this.http.post<ResData>(`${this.baseUrl}`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }
}
