import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_FOR_VALUTE_DATA = 'https://www.cbr-xml-daily.ru/daily_json.js';

export interface IValuteData {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: { [k: string]: IValute };
}

interface IValute {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number; // количество
  Name: string;
  Value: number;
  Previous: number;
}

@Injectable({
  providedIn: 'root',
})
export class ValuteService {
  constructor(private readonly http: HttpClient) {}

  getValuteData(): Observable<IValuteData> {
    return this.http.get<IValuteData>(URL_FOR_VALUTE_DATA);
  }
}
