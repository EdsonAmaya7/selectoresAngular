import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {
  private _baseUrl: string = 'https://restcountries.com/v3'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europa', 'Oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    return this.http.get<PaisSmall[]>(`${this._baseUrl}/region/${region}?fields=cca3,name`)
  }

}