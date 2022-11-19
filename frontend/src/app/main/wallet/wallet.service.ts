import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface WalletsData {
  name: string;
  money: string;
  card: string;
  cardNumber: number;
}

@Injectable()
export class WalletService {
  data =[{name: 'Кошелек', money: '100,96 р.', card: 'Visa Classic', cardNumber: 1111}, {name: 'Кошелек USD', money: '130 $', card: 'Visa Classic', cardNumber: 1111}]
  constructor() {}
  getData(): Observable<WalletsData[]> {
    return of(this.data)
  }
}
