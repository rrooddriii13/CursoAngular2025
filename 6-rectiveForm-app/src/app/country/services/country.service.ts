import { inject, Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private http = inject(HttpClient);

  private _regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regions(): string[] {
    return [...this._regions];
  }

  obtenerPaisesPorRegion(region: string): Observable<Country[]> {
    if (!region) return of([]);

    console.log({ region });

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
    return this.http.get<Country[]>(url);
  }

  obtenerPaisPorCodigoAlpha(alphaCode: string): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;
    return this.http.get<Country>(url);
  }

  obtenerNombresDePaisesPorCodigos(codigos: string[]): Observable<Country[]> {
    if (!codigos || codigos.length === 0) return of([]);

    const countriesRequests: Observable<Country>[] = [];

    codigos.forEach((code) => {
      const request = this.obtenerPaisPorCodigoAlpha(code);
      countriesRequests.push(request);
    });

    return combineLatest(countriesRequests);
  }
}