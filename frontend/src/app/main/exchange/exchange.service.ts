import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExchangeService {
  private readonly baseUrl = 'https://api.apilayer.com/fixer/latest';

  constructor(private http: HttpClient) { }

  
}
