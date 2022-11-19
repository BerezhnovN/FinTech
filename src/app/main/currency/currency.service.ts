import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private readonly baseUrl = 'https://api.apilayer.com/fixer/latest';

  constructor(private http: HttpClient) {}

  getData(base: string, symbols?: string): Observable<LatestData> {
    return this.http.get<LatestData>(`${this.baseUrl}`, {
      params: {
        symbols: symbols || '',
        base: base,
      },
      headers: { apikey: 'VUYJLw7YedsftTrfAVitZRWmnvj7Bgsj' },
    });
  }
}
