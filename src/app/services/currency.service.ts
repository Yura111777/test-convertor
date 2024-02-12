import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CurrencyResponse } from '../interfaces/currency-response';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?&json';
  getCurrency(): Observable<CurrencyResponse[]> {
    return this.http
      .get<CurrencyResponse[]>(this.apiUrl)
      .pipe(map((response) => response));
  }
}
