import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {
  private _baseUrl: string = 'https://restcountries.com/v3'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    return this.http.get<PaisSmall[]>(`${this._baseUrl}/region/${region}?fields=cca3,name`)
  }

  getPaisPorCodigo(codigo: string): Observable<Pais[] | null> {

    if (!codigo) {
      return of(null);
    }

    const url = `${this._baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais[]>(url)
  }

 
  // getPaisPorCodigo(codigo: string): Observable<PaisSmall> {

  //   const url = `${this._baseUrl}alpha/${codigo}?fields=cca3,name`;
  //   return this.http.get<PaisSmall>(url)
  // }

  // getPaisesPorCodigos(bordes: Pais[]): Observable<PaisSmall[]> {
  //   if (!bordes[0]?.borders) {
  //     return of([]);
  //   }
  //   const peticiones: Observable<PaisSmall>[] = [];

  //   bordes[0]?.borders.forEach(codigo => {
  //     const peticion = this.getPaisPorCodigo(codigo);
  //     peticiones.push(peticion);
  //   });

  //   return combineLatest(peticiones);
  // } 
}